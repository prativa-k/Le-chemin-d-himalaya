import argon2 from "argon2";
import type { Request, Response } from "express";
import SecurityRepository from "../repository/security_repository";
import UserRepository from "../repository/user_repository";
import type { User } from "../../models/user";

class SecurityController {
	// engistrer un utilisateur
	public register = async (req: Request, res: Response) => {
		//récupération des résultats de la résultats de la requête
		const results = await new SecurityRepository().register({
			...req.body,
			password: await argon2.hash(req.body.password),
		});

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
			message: "Created",
			data: results,
		});
	};

	public login = async (req: Request, res: Response) => {
		// vérifier l'existence de l'email de l'utilisateur
		let results = await new SecurityRepository().isEmailUserExists(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		// si l'email n'existe pas
		if (!results) {
			res.status(403).json({
				status: 403,
				message:
					process.env.NODE_ENV === "production"
						? "Error"
						: "Forbidden - User email not exists",
			});

			return;
		}

		// récupérer l'utilisateur par son email
		results = await new SecurityRepository().selectOneByEmail(req.body);

		// verifier le mot de passe
		const passwordIsValid = await argon2.verify(
			(results as User).password,
			req.body.password,
		);

		if (!passwordIsValid) {
			res.status(401).json({
				status: 401,
				message:
					process.env.NODE_ENV === "production"
						? "Error"
						: "Unauthorized - Invalid password",
			});

			return;
		}

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};
}

export default SecurityController;
