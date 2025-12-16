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
		const sql = `
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
			// exécution de la requête
			const [query] = await connection.execute(sql, data);

			return query;
			// retourner kes résultants
		} catch (error) {
			return error;
		}
	};
}

export default MenuRepository;
