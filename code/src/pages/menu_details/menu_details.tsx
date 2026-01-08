// pages/actions/action_detail.tsx
import { use } from "react";
import Seo from "../../components/seo/seo";
import type { Menu } from "../../../models/menu";
import type { MenuDetailsParams } from "../../models/props/params/menu-details-params";
import MenuApiService from "../../services/menu_api_service";
import MenuDetailsContent from "../../components/menu/menu-details/menu_details_content";

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