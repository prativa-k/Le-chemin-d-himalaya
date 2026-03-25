// pages/actions/action_detail.tsx
import { use } from "react";
import type { Menu } from "../../../models/menu";
import MenuDetailsContent from "../../components/menu/menu-details/menu_details_content";
import Seo from "../../components/seo/seo";
import type { MenuDetailsParams } from "../../models/params/menu-details-params";
import MenuApiService from "../../services/menu_api_service";

const MenuDetailPage = ({ params }: MenuDetailsParams) => {
	const { id } = params;
	// récuperer les données
	const result = use(new MenuApiService().selectOne(id));

	// console.log(result);

	return (
		<>
			<Seo title="Menu" description="Détails des Menu" url="" />
			<MenuDetailsContent data={result.data as Menu} />
		</>
	);
};
export default MenuDetailPage;
