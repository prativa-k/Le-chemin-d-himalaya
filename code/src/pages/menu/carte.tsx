import CategoryList from "../../components/category/categorylist";
import MenuList from "../../components/menu/menu_list";
import Seo from "../../components/seo/seo";


const CartePage = () => {
	return (
		<>
			<Seo title="Carte" description="Carte - desc" url="/mentionlegale" />
			<CategoryList/>
			<MenuList />
		</>
	);
};

export default CartePage;
