import type { ApiResponse } from "../../models/api_response";
import type { Category } from "../../models/category";


class CategoryListApiService {
	// préfixe de l'API
	private prefix = "/api/category";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Category[]>> => {
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
}

export default CategoryListApiService;


