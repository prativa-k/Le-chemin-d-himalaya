import type { QueryResult } from "mysql2";
import type { Category } from "../../models/category";
import type { Orderable } from "../../models/orderable";
import MYSQLService from "../service/mysql_service";
import OrderableRepository from "./orderable_repository";

class CategoryRepository {
	//nom de la table SQL
	private table = "category";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Category[] | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// SELECT menu.* FROM foodtruck_dev.menu;

		/* 
		SELECT 
			category.*,GROUP_CONCAT(orderable.id) 
		AS 
			orderable_ids 
		FROM
		 lechemin_dev.category
		JOIN 
			lechemin_dev.orderable 
		ON 
			category_id= category.id 
		GROUP BY 
			category.id;
		*/
		const sql = `
        SELECT
			 ${this.table}.*,
			GROUP_CONCAT(orderable.id)
		AS 
			orderable_ids
        FROM
        	${process.env.MYSQL_DATABASE}.${this.table}
		
		JOIN
			${process.env.MYSQL_DATABASE}.orderable
		ON
			category_id= category.id 
		GROUP BY
			category.id;

        `;
		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql);

			for (let i = 0; i < (query as Category[]).length; i++) {
				// récupérer un résultat

				const result = (query as Category[])[i] as Category;

				result.orderables = (await new OrderableRepository().selectINlist(
					result.orderable_ids,
				)) as Orderable[];
			}

			return query;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un les enregistrements
	// data représente une partie des proriétés du type
	public selectOne = async (
		data: Partial<Category>,
	): Promise<Category | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// WHERE category.id = ...
		//variable de réqête: précédée d'un: , suivi du nom de la variable
		// requêtes préparées : sécurité, le requêtes: la requête est exécutées si elle ne rpésente pas de risque de sécurité
		const sql = `
		SELECT
			${this.table}.*,
	   		GROUP_CONCAT(orderable.id)
  		AS 
	   		orderable_ids
   		FROM
	   		${process.env.MYSQL_DATABASE}.${this.table}
   
   		JOIN
	   		${process.env.MYSQL_DATABASE}.orderable
   		ON
	   		category_id= category.id 

		WHERE
			 ${this.table}.id = :id
   		GROUP BY
	   		category.id;
	
		;
        `;
		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql, data);

			// shift: récupérer le premier indice d'un array

			const result = (query as Category[]).shift() as Category;

			result.orderables = (await new OrderableRepository().selectINlist(
				result.orderable_ids,
			)) as Orderable[];

			return result;
		} catch (error) {
			return error;
		}
	};

	public insert = async (
		data: Partial<Category>,
	): Promise<QueryResult | unknown> => {
		// connection au serveur

		const connection = await new MYSQLService().connect();

		// requête SQL
		let sql = `
			INSERT INTO 
			${process.env.MYSQL_DATABASE}.${this.table}

			VALUE
			(
			NULL,
			:name,
			)
			;
		
		`;

		try {
			//demarré un transaction SQL
			connection.beginTransaction();

			//exécuter la prémiere requête SQL
			await connection.execute(sql, data);

			// deuxième requête SQL
			sql = `SET @id = LAST_INSERT_ID();`;
			await connection.execute(sql, data);

			// troisième requête
			/*
			INSERT INTO lechemin_dev.orderable_menu
		 	VALUES
			(1, @id),
			(2, @id),
			(3, @id);

			split: extraire des données d'une chaîne de caractères en array
				1,2,3 >> (1, @id),(2, @id),(3, @id)
			*/
			const joinIds = data.orderable_ids
				?.split(",")
				.map((value) => `(${value},@id)`)
				.join();
			// console.log(joinIds);

			sql = `
				INSERT INTO
				${process.env.MYSQL_DATABASE}.orderable_menu
				VALUES
				${joinIds}
				;
			`;
			const [query] = await connection.execute(sql);

			// exécution de la requête
			// const [query] = await connection.execute(sql, data);

			//valider la transaction SQL
			connection.commit();

			return query;
			// retourner kes résultants
		} catch (error) {
			//annuler une transcation SQL
			connection.rollback();
			return error;
		}
	};
}

export default CategoryRepository;
