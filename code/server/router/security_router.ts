import express from "express";
import SecurityController from "../controller/security_controller";

class SecurityRouter {
	//router express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// below under req  have added underscore just for the sake that the warning does not keep on showing meaning without _ it says the parametre is unused
		// le préfixe des routes est dans le serveur
		this.router.post("/register", new SecurityController().register);
		this.router.post("/login", new SecurityController().login);

		// retourner le routeur
		return this.router;
	};
}

export default SecurityRouter;
