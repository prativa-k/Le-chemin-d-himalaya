import type { Request, Response } from "express";

class HomepageController {
	// methodes reliée à la route en GET située dans le router
	public index = (_req: Request, res: Response) => {
		//renvoyer une réponse avec un code de status HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Foodtruck API",
		});
	};
}

export default HomepageController;
