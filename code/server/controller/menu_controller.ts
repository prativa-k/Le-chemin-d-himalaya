import type { Request, Response } from "express";
import MenuRepository from "../repository/menu_repository";

class MenuController {
	// methodes reliée à la route en GET située dans le router
	public index = async (_req: Request, res: Response) => {
		//récupération des résultats de la résultats de la requête
		const results = await new MenuRepository().selectAll();

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		//renvoyer une réponse avec un code de status HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Menu",
			data: results,
		});
	};
	
	public selectOne = async (req: Request, res: Response) => {
		// récupérer la varibale de route
		console.log(req.params);

		//récupération des résultats de la résultats de la requête
		const results = await new MenuRepository().selectOne(req.params);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		//renvoyer une réponse avec un code de status HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Menu",
			data: results,
		});
	};

	public insert = async (req: Request, res: Response) => {
		// console.log(req.body);
		
		
		//récupération des résultats de la résultats de la requête
		// req.body: récupérer la priopriété body de la requête
		const results = await new MenuRepository().insert(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		//renvoyer une réponse avec un code de status HTTP et au format JSON
		res.status(201).json({
			status: 201,
			message: "Creating",
			data: results,
		});
	};

	public update = async (req: Request, res: Response) => {
		console.log(req.body);
		
		
		//récupération des résultats de la résultats de la requête
		// req.body: récupérer la priopriété body de la requête
		const results = await new MenuRepository().update(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		//renvoyer une réponse avec un code de status HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Updated",
			data: results,
		});
	};

	public delete = async (req: Request, res: Response) => {
		console.log(req.body);
		
		
		//récupération des résultats de la résultats de la requête
		// req.body: récupérer la priopriété body de la requête
		const results = await new MenuRepository().delete(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		//renvoyer une réponse avec un code de status HTTP et au format JSON
		res.status(400).json({
			status: 400,
			message: "Deleted",
			data: results,
		});
	};


}

export default MenuController;
