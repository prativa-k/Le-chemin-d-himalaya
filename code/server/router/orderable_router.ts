import express from "express";
import OrderableController from "../controller/orderable_controller";



class OrderableRouter{

    //router express
    private router = express.Router();

    // multer permet de gérer le transferet de fichiers
	// private multer = multer({ dest: "pub" });

    // liste des routes
    public getRoutes = () => {
         // créer une route /api accessible en GET
            // below under req  have added underscore just for the sake that the warning does not keep on showing meaning without _ it says the parametre is unused
            // le préfixe des routes est dans le serveur
            this.router.get('/', new OrderableController().index);   
            
            //variable de route: précédée par un:; suivie du nom de la variable
            this.router.get('/:id', new OrderableController().selectOne); 
            // this.router.post("/", this.multer.any(),new MenuController().insert);

            // retourner le routeur
            return this.router;
        }
    }


export default OrderableRouter;