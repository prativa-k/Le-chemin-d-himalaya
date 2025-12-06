import express from "express";
import OrderableMenuController from "../controller/orderable_menu_controller";

class OrderableMenuRouter{

    //router express
    private router = express.Router();

    // liste des routes
    public getRoutes = () => {
         // créer une route /api accessible en GET
            // below under req  have added underscore just for the sake that the warning does not keep on showing meaning without _ it says the parametre is unused
            // le préfixe des routes est dans le serveur
            this.router.get('/', new OrderableMenuController().index);   
            
            //variable de route: précédée par un:; suivie du nom de la variable
            this.router.get('/:id', new OrderableMenuController().selectOne); 

            // retourner le routeur
            return this.router;
        }
    }


export default OrderableMenuRouter;