import express from "express";
import AvisController from "../controller/avis_controller";

class AvisRouter {
    // routeur express
    private router = express.Router();

    // liste des routes
    public getRoutes = () => {
        // créer une route en GET
        // le préfixe des routes est dans le serveur
        this.router.get("/", new AvisController().index);
        this.router.post("/", new AvisController().insert);

        // retourner le routeur
        return this.router;
    };
}
export default AvisRouter;