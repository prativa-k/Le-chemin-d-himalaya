import express from "express";
import HomepageRouter from "../router/homepage_router";
import MenuRouter from "../router/menu_router";
import CategoryRouter from "../router/category_router";

class Server{

    // proprétés
    private app = express();
    private router = express.Router();

    // contructeur
    constructor(){
        // relier le routeur à l'application
        this.app.use(this.router);

        // appel des routeurs
        this.routersList();

        }
        // méthodes
        // liste des routeurs
        private routersList = () => {
           // créer un préfix à toutes les routes incluses dans un routeur
           this.router.use("/api", new HomepageRouter().getRoutes());
           this.router.use("/api/menu", new MenuRouter().getRoutes());
           this.router.use("/api/category", new CategoryRouter().getRoutes());
        };

        // demarrer le serveur
        public startServer = () => {
            return this.app;
        }
    }

    export default Server;

