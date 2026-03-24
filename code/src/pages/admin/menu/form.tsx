import { use } from "react";
import { data } from "react-router";
import type { AdminMenuParams } from "../../../models/props/params/admin_menu_params";
import type { Menu } from "../../../../models/menu";
import MenuApiService from "../../../services/menu_api_service";
import OrderableApiService from "../../../services/security_api_service";
import type { Orderable } from "../../../../models/orderable";
import AdminMenusFormContent from "../../../components/admin/menu/admin_menus_form_content";
import AdminActionFormValidator from "../../../validator/admin/admin_menu_form_validator";


const AdminMenuForm = ({ params }: AdminMenuParams) => {
	// récupérer la variable d'URL
	const { id } = params;
	// console.log(id);

	// récupérer les données à mettre à jour
	let dataToUpdate: Menu | undefined;

	// si un identifiant est présent dans l'URL
	if (id) {
		// la méthode then equivaut à await
		// new MenuApiService().selectOne(id).then((item) =>{
		// 	dataToUpdate = item.data as Menu;
		// 	console.log(dataToUpdate);
		// });

		dataToUpdate = use(new MenuApiService().selectOne(id)).data as Menu;
	}

	

	const orderables = use(new OrderableApiService().selectAll())
		.data as Orderable[];
	// console.log(orderables);

	return (
		<AdminMenusFormContent
			orderables={orderables}
			validator={new AdminActionFormValidator().validate}
			dataToUpdate={dataToUpdate}
			
		/>
	);
};

export default AdminMenuForm;
