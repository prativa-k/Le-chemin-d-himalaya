
import type { Role } from "../../models/role";
import type { User } from "../../models/user";
import MYSQLService from "../service/mysql_service";
import RoleRepository from "./role_repository";


class UserRepository {
	//nom de la table SQL
	private table = "user";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<User[] | unknown> => {
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

			for (let i = 0; i < (query as User[]).length; i++) {
				// récupérer un résultat

				const result = (query as User[])[i] as User;

				// clés étrangères
				result.role = (await new RoleRepository().selectOne({
					id: result.role_id,
				})) as Role;
			}

			return query;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un les enregistrements
	// data représente une partie des proriétés du type
	public selectOne = async (data: Partial<User>): Promise<User | unknown> => {
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
			const result = (query as User[]).shift() as User;

			// clés étrangères
			result.role = (await new RoleRepository().selectOne({
				id: result.role_id,
			})) as Role;

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default UserRepository;
