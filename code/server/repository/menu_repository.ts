import type { Menu } from "../../models/menu";
import MYSQLService from "../service/mysql_service";

class MenuRepository {
	//nom de la table SQL
	private table = "menu";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Menu[] | unknown> => {
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
}

export default MenuRepository;
