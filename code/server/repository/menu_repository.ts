import type { QueryResult } from "mysql2";
import type { Menu } from "../../models/menu";
import type { Orderable } from "../../models/orderable";
import MYSQLService from "../service/mysql_service";
import OrderableRepository from "./orderable_repository";

class MenuRepository {
	//nom de la table SQL
	private table = "menu";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Menu[] | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// SELECT menu.* FROM lechemin_dev.menu;
		/*
			SELECT
				menu.*,
				GROUP_CONCAT(orderable.id) AS orderable_ids
			FROM
				lechemin_dev.menu
			JOIN
				lechemin.orderable_menu
			ON
				orderable_menu.menu_id = menu.id
			JOIN
				lechemin_dev.orderable
			ON
				orderable.id = orderable_menu.orderable_id
			GROUP BY
				menu.id
			;
		*/
		const sql = `
        SELECT 
			${this.table}.*,
			GROUP_CONCAT(orderable.id) AS orderable_ids
        FROM
        	${process.env.MYSQL_DATABASE}.${this.table}
		
		JOIN
		${process.env.MYSQL_DATABASE}.orderable_menu
		ON
			orderable_menu.menu_id = ${this.table}.id
		JOIN
		${process.env.MYSQL_DATABASE}.orderable
		ON
			orderable.id = orderable_menu.orderable_id
		GROUP BY
		${this.table}.id
			;
        `;
		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql);

			for (let i = 0; i < (query as Menu[]).length; i++) {
				// récupérer un résultat

				const result = (query as Menu[])[i] as Menu;

				// clés jointures
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
	public selectOne = async (data: Partial<Menu>): Promise<Menu | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// WHERE category.id = ...
		//variable de réqête: précédée d'un: , suivi du nom de la variable
		// requêtes préparées : sécurité, le requêtes: la requête est exécutées si elle ne rpésente pas de risque de sécurité
		const sql = `
        SELECT 
			${this.table}.*,
			GROUP_CONCAT(orderable.id) AS orderable_ids
        FROM
        	${process.env.MYSQL_DATABASE}.${this.table}
		
		JOIN
		${process.env.MYSQL_DATABASE}.orderable_menu
		ON
			orderable_menu.menu_id = ${this.table}.id
		JOIN
		${process.env.MYSQL_DATABASE}.orderable
		ON
			orderable.id = orderable_menu.orderable_id
		WHERE ${this.table}.id = :id
		GROUP BY
		${this.table}.id
			;
        `;

		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql, data);

			// récupérer un résultat

			const result = (query as Menu[]).shift() as Menu;

			// clés jointures
			result.orderables = (await new OrderableRepository().selectINlist(
				result.orderable_ids,
			)) as Orderable[];

			return result;
		} catch (error) {
			return error;
		}
	};

	// insérer un enregistrement

	public insert = async (
		data: Partial<Menu>,
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
			:price
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

	//
	public update = async (
		data: Partial<Menu>,
	): Promise<QueryResult | unknown> => {
		// connection au serveur

		const connection = await new MYSQLService().connect();

		// requête SQL
		let sql = `
			UPDATE
				${process.env.MYSQL_DATABASE}.${this.table}

			SET
				${this.table}.name = :name,
				${this.table}.price = :price
			WHERE
			${this.table}.id = :id
			;
		
		`;

		try {
			//demarré un transaction SQL
			connection.beginTransaction();

			//exécuter la prémiere requête SQL
			//si la requêye posséde des variables, utliser le paramétre de la methode
			await connection.execute(sql, data);

			// // deuxième requête SQL
			sql = `
				DELETE FROM 
					${process.env.MYSQL_DATABASE}.orderable_menu
				WHERE	 
					orderable_menu.menu_id = :id
				;
			`;
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
				.map((value) => `(${value}, :id)`)
				.join();
			// 	// console.log(joinIds);

			sql = `
				INSERT INTO
				${process.env.MYSQL_DATABASE}.orderable_menu
				VALUES
				${joinIds}
				;
			`;

			// exécution de la requête
			const [query] = await connection.execute(sql, data);

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

	// suprimer un enegistrement
	public delete= async (
		data: Partial<Menu>,
	): Promise<QueryResult | unknown> => {
		// connection au serveur

		const connection = await new MYSQLService().connect();

		// requête SQL
		let sql = `
			DELETE FROM
				${process.env.MYSQL_DATABASE}.orderable_menu
			WHERE
			orderable_menu.menu_id = :id
			;
		
		`;

		try {
			//demarré un transaction SQL
			connection.beginTransaction();

			//exécuter la prémiere requête SQL
			//si la requêye posséde des variables, utliser le paramétre de la methode
			await connection.execute(sql, data);

			// // deuxième requête SQL
			sql = `
				DELETE FROM 
					${process.env.MYSQL_DATABASE}.${this.table}
				WHERE	 
					${this.table}.id = :id
				;
			`;

			// exécution de la requête
			const [query] = await connection.execute(sql, data);

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

export default MenuRepository;
