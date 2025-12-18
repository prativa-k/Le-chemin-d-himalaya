import type { QueryResult } from "mysql2";
import type { Category } from "../../models/category";
import type { Orderable } from "../../models/orderable";
import type { OrderableSpice } from "../../models/orderable_spice";
import type { OrderableType } from "../../models/orderable_type";
import MYSQLService from "../service/mysql_service";
import CategoryRepository from "./category_repository";
import OrderableSpiceRepository from "./orderable_spice_repository";
import OrderableTypeRepository from "./orderable_type_repository";

class OrderableRepository {
	//nom de la table SQL
	private table = "orderable";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Orderable[] | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// SELECT menu.* FROM foodtruck_dev.menu;
		const sql = `
        SELECT ${this.table}.*
        FROM
        ${process.env.MYSQL_DATABASE}.${this.table};
        `;
		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupèrer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Orderable[]).length; i++) {
				// récupérer un résultat

				const result = (query as Orderable[])[i] as Orderable;

				// clés étrangères
				result.category = (await new CategoryRepository().selectOne({
					id: result.category_id,
				})) as Category;

				result.orderable_spice =
					(await new OrderableSpiceRepository().selectOne({
						id: result.orderable_spice_id,
					})) as OrderableSpice;

				result.orderable_type = (await new OrderableTypeRepository().selectOne({
					id: result.orderable_type_id,
				})) as OrderableType;
			}

			return query;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un les enregistrements
	// data représente une partie des proriétés du type
	public selectOne = async (
		data: Partial<Orderable>,
	): Promise<Orderable | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// WHERE category.id = ...
		//variable de réqête: précédée d'un: , suivi du nom de la variable
		// requêtes préparées : sécurité, le requêtes: la requête est exécutées si elle ne rpésente pas de risque de sécurité
		const sql = `
        SELECT ${this.table}.*
        FROM ${process.env.MYSQL_DATABASE}.${this.table}
		WHERE ${this.table}.id = :id
		;
        `;
		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql, data);

			// shift: récupérer le premier indice d'un array
			const result = (query as Orderable[]).shift() as Orderable;

			// clés étranger
			result.category = (await new CategoryRepository().selectOne({
				id: result.category_id,
			})) as Category;

			result.orderable_spice = (await new OrderableSpiceRepository().selectOne({
				id: result.orderable_spice_id,
			})) as OrderableSpice;

			result.orderable_type = (await new OrderableTypeRepository().selectOne({
				id: result.orderable_type_id,
			})) as OrderableType;

			return result;
		} catch (error) {
			return error;
		}
	};

	public selectINlist = async (
		list: string,
	): Promise<Orderable[] | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MYSQLService().connect();

		// requête SQL
		// SELECT menu.* FROM foodtruck_dev.menu;
		const sql = `
        SELECT ${this.table}.*
        FROM
        ${process.env.MYSQL_DATABASE}.${this.table}
		WHERE ${this.table}.id IN(${list})
		;
        `;
		//try / catch : récupérer les resultats de la requête ou un erreur

		try {
			// exécution de la requête
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupèrer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Orderable[]).length; i++) {
				// récupérer un résultat

				const result = (query as Orderable[])[i] as Orderable;

				// clés étrangères
				// result.category = (await new CategoryRepository().selectOne({
				// 	id: result.category_id,
				// })) as Category;

				result.orderable_spice =
					(await new OrderableSpiceRepository().selectOne({
						id: result.orderable_spice_id,
					})) as OrderableSpice;

				result.orderable_type = (await new OrderableTypeRepository().selectOne({
					id: result.orderable_type_id,
				})) as OrderableType;
			}

			return query;
		} catch (error) {
			return error;
		}
	};

	public insert = async (
		data: Partial<Orderable>,
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
			:price,
			:image,
			:description,
			:category_id,
			:orderable_type_id,
			:orderable_spice_id

			)
			;
		
		`;

		try {
			//demarré un transaction SQL
			connection.beginTransaction();

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

export default OrderableRepository;
