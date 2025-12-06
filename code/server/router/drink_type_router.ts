import express from "express";
import DrinkTypeController from "../controller/drink_type_controller";

class DrinkTypeRouter{

    //router express
    private router = express.Router();

    // liste des routes
    public getRoutes = () => {
         // créer une route /api accessible en GET
            // below under req  have added underscore just for the sake that the warning does not keep on showing meaning without _ it says the parametre is unused
            // le préfixe des routes est dans le serveur
            this.router.get('/', new DrinkTypeController().index);   
            
            //variable de route: précédée par un:; suivie du nom de la variable
            this.router.get('/:id', new DrinkTypeController().selectOne); 

            // retourner le routeur
            return this.router;
        }
    }


export default DrinkTypeRouter;