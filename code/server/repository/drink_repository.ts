import type { Drink } from "../../models/drink";
import MYSQLService from "../service/mysql_service";
import DrinkTypeRepository from "./drink_type_repository";

class DrinkRepository {
	//nom de la table SQL
	private table = "drink";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Drink[] | unknown> => {
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

			for (let i = 0; i < (query as Drink[]).length; i++) {
				// récupérer un résultat

				const result = (query as Drink[])[i] as Drink;

				// clés étrangères
				result.drink_type = (await new DrinkTypeRepository().selectOne({
					id: result.drink_type_id,
				})) as Drink;
			}

			return query;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un les enregistrements
	// data représente une partie des proriétés du type
	public selectOne = async (data: Partial<Drink>): Promise<Drink | unknown> => {
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
			const result = (query as Drink[]).shift() as Drink;

			// clés étrangères
			result.drink_type = (await new DrinkTypeRepository().selectOne({
				id: result.drink_type_id,
			})) as Drink;

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default DrinkRepository;
