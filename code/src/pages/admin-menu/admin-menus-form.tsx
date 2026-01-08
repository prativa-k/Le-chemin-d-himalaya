import { use } from "react";
import type { Orderable } from "../../../models/orderable";
import AdminMenusFormContent from "../../components/admin/menu/admin_menus_form_content";
import OrderableApiService from "../../services/orderable_api_service";

const AdminMenuForm = () => {
	const orderables = use(new OrderableApiService().selectAll())
		.data as Orderable[];
	// console.log(orderables);

	return <AdminMenusFormContent orderables={orderables} />;
};

export default AdminMenuForm;
