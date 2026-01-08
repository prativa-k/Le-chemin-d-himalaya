import { useId } from "react";
import type { AdminMenuFormContentProps } from "../../../models/props/admin_menu_form_content_props";

const AdminMenusFormContent = ({ orderables }: AdminMenuFormContentProps) => {
	const nameId = useId();
	const priceId = useId();
	const idId = useId();

	return (
		<>
			<p>Gérer les menus</p>

			{/* 
 
 - "si le formulaire contient un champ fe fichier: ajouter l'attribut enctype = multipart/ form-data"

 - pour les champs en relation:
 	FK: Créer , soit une liste déroulante

 	<select>, soit des butons radio
 		> sélection d'un seul choix
 	tabke de jointure: cases à cocher
 		> sélection de plusieurs choix

// 	*/}

			<form>
				<p>
					<label htmlFor={nameId}>Nom:</label>
					<input type="text" name="name" id={nameId} />
				</p>

				<p>
					<label htmlFor={priceId}>Prix:</label>
					<input type="text" name="price" id={priceId} />
				</p>

				<p>Plats:</p>
				{orderables.map((item) => {
					return (
						<p key={item.id}>
							<input type= "checkbox" value={item.id} id={item.id as unknown as string}
							name="orderable_ids" />
							{/* //reprendre strictement le nom des champs de formulaire testés avec flashpost */}
							<label htmlFor= {item.id as unknown as string}> {item.name}</label>
						</p>
					);
				})}

				<p>
					<input type="text" name="price" id={idId} />
					<button type="submit">Créer un Menu</button>
				</p>
			</form>
		</>
	);
};
export default AdminMenusFormContent;
