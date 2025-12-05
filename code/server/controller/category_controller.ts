import type { Request, Response } from "express";
import CategoryRepository from "../repository/category_repository";

class CategoryController {
	// methodes reliée à la route en GET située dans le router
	public index = async (_req: Request, res: Response) => {
		//récupération des résultats de la résultats de la requête
		const results = await new CategoryRepository().selectAll();

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
			message: "Category",
			data: results,
		});
	};
	public selectOne = async (req: Request, res: Response) => {
		// récupérer la varibale de route
		console.log(req.params);
		

		//récupération des résultats de la résultats de la requête
		const results = await new CategoryRepository().selectOne({id: 1});

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
			message: "Category",
			data: results,
		});
	};
}

export default CategoryController;
