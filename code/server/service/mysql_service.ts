import mysql, { type PoolConnection } from "mysql2/promise";

class MYSQLService {
     // propriété statique: accessible sans objet
    private static instance: PoolConnection;


    // connexion au serveur MYSQL
    public connect = async() => {
        
        //si aucune connexion n'existe
        if (!MYSQLService.instance){
            MYSQLService.instance = await mysql.createPool({
               host: process.env.MYSQL_HOST,
               user: process.env.MYSQL_USER,
               password: process.env.MYSQL_PASSWORD,
               database: process.env.MYSQL_DATABASE,
               namedPlaceholders: true,
            }).getConnection();
        }

        //retourner la connexion
        return MYSQLService.instance;

    };

}

export default MYSQLService;