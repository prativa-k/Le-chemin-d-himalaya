import express from "express";
import MenuController from "../controller/menu_controller";

class MenuRouter{

    //router express
    private router = express.Router();

    // liste des routes
    public getRoutes = () => {
         // créer une route /api accessible en GET
            // below under req  have added underscore just for the sake that the warning does not keep on showing meaning without _ it says the parametre is unused
            // le préfixe des routes est dans le serveur
            this.router.get('/', new MenuController().index);      
            

            // retourner le routeur
            return this.router;
        }
    }


export default MenuRouter;