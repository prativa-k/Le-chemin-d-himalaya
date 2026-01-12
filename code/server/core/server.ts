import express from "express";
import CategoryRouter from "../router/category_router";
import DrinkRouter from "../router/drink_router";
import DrinkTypeRouter from "../router/drink_type_router";
import HomepageRouter from "../router/homepage_router";
import MenuRouter from "../router/menu_router";
import OrderableRouter from "../router/orderable_router";
import OrderableSpiceRouter from "../router/orderable_spice_router";
import OrderableTypeRouter from "../router/orderable_type_router";
import RoleRouter from "../router/role_router";
import UserRouter from "../router/user_router";
import cors from "cors"




class Server {
	// proprétés
	private app = express();
	private router = express.Router();

	// contructeur
	constructor() {
		// intégrer le middleware express JSON qui permet de récupérer la proprieté body de la requête HTTP en JSON
		this.app.use(express.json());

		// intégrer le middleware CORS - Cross Origin Resource Sharing - qui permet d'autoriser l'accès aux ressources à des origines différentes(protocole, port, sous-domaine)
		this.app.use(cors({
			origin:process.env.ORIGINS?.split(",")
		}))

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
		this.router.use("/api/drink_type", new DrinkTypeRouter().getRoutes());
		this.router.use("/api/drink", new DrinkRouter().getRoutes());
		this.router.use(
			"/api/orderable_spice",
			new OrderableSpiceRouter().getRoutes(),
		);
		this.router.use(
			"/api/orderable_type",
			new OrderableTypeRouter().getRoutes(),
		);
		this.router.use("/api/orderable", new OrderableRouter().getRoutes());
		this.router.use("/api/user", new UserRouter().getRoutes());
		this.router.use("/api/role", new RoleRouter().getRoutes());
	};

	// demarrer le serveur
	public startServer = () => {
		return this.app;
	};
}

export default Server;
