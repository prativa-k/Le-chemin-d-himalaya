import { use } from "react";
import type { ApiResponse } from "../../../models/api_response";
import type { Menu } from "../../../models/menu";
import MenuApiService from "../../services/menu_api_service";
import MenuListItem from "./menu_list_item";
import CategoryListItem from "../category/category_list_item";

const MenuList = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
	const results = use<ApiResponse<Menu[]>>(new MenuApiService().selectAll());

	return (
		<section>
			{results.data?.map((item) => (
				// item est passé en props
				<CategoryListItem key={item.id} data={item} />
			))}
		</section>
	);
};

export default MenuList;
