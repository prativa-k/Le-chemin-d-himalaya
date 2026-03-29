import type { ApiResponse } from "../../models/api_response";
import type { Menu } from "../../models/menu";

class MenuApiService {
	// préfixe de l'API
	private prefix = "/api/menu";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Menu[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);

		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objet, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractère en données complexe : objet, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	public selectOne = async (id: number): Promise<ApiResponse<Menu>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);

		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objet, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractère en données complexe : objet, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	public insert = async (
		data: Partial<Menu>,
		token: string,
	): Promise<ApiResponse<Menu[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objet, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractère en données complexe : objet, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};
	// supression d'un engristrement

	// si le formulaire contient de ficher: utiliser Formdata  en parametre
	// si le formulaire ne contient pas de champ: utiliser le id

	public Update = async (
		data: Partial<Menu>,
		token: string,
	): Promise<ApiResponse<Menu[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "put",

				//  si le formulaire contient un champ de ficher la propriéte body renovie un objet
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objet, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractère en données complexe : objet, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	// supression d'un engristrement
	public Delete = async (data: Partial<Menu>, token: string,): Promise<ApiResponse<Menu[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "delete",

				//  si le formulaire contient un champ de ficher la propriéte body renovie un objet
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				// séralise: transformer une donnée complexe (array, objet) en chaine de caractères
				// déséraliser: transformer une chaine de caractères en ube donnée complexe (arraya, objet)
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objet, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractère en données complexe : objet, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};
}

export default MenuApiService;
