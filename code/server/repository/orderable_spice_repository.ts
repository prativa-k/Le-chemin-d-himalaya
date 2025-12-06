
import type { OrderableSpice } from "../../models/orderable_spice";
import MYSQLService from "../service/mysql_service";

class OrderableSpiceRepository {
	//nom de la table SQL
	private table = "OrderableSpice";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<OrderableSpice[] | unknown> => {
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

			return query;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un les enregistrements
	// data représente une partie des proriétés du type
	public selectOne = async (
		data:Partial<OrderableSpice>,
	): Promise<OrderableSpice| unknown> => {
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
			const [query] = await connection.execute(sql,data);

			// shift: récupérer le premier indice d'un array
			const result = (query as OrderableSpice[]).shift();

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default OrderableSpiceRepository;
