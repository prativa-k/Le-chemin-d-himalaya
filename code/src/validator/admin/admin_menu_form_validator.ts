import { type ZodError, z } from "zod";
import type { Menu } from "../../../models/menu";

class AdminActionFormValidator {
	// VALIDATION DES DONNÉES DU FORMULAIRE
	public validate = async (
		data: Partial<Menu>,
	): Promise<Partial<Menu> | ZodError> => {
		// la méthode doit être executée côté serveur
		"use server";
		// contraintes de validations
		// reprendre strictement les propriétés du type à valider
		const constraints = z.object({
			id: z.union([
				z.string().nullable(),
				// coerce : transtyper
				z.coerce
					.number()
					.positive(),
			]),
			name: z
				.string("Name is required")
				.min(2, "A name contains , minimum, 2 caractères")
				.max(100, "A name contains, maximum, 50 caractères"),

			price: z.coerce
				.number("Price is required")
				.min(2, "A price contains , minimum, 2 characters")
				.max(50, "A price contains ,  maximum, 50 characters"),

			orderable_ids: z.coerce.string().min(1, "Select an orderable"),
		});

		// validation de la saisie du formulaire
		const validation = await constraints.safeParseAsync(data);

		// si la validation échoue
		if (!validation.success) {
			return validation.error;
		}

		// si la validation réussi
		return validation.data as Partial<Menu>;
	};
}

export default AdminActionFormValidator;
