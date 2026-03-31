import CategoryList from "../../components/category/categorylist";
import MenuList from "../../components/menu/menu_list";
import Seo from "../../components/seo/seo";
import styles from "../../assets/css/menu/carte_page.module.css"


const CartePage = () => {
	return (
		<>
			<Seo title="Carte" description="Carte - desc" url="/carte" />
			
			<div className={styles.menuBanner}>
				<img src="/img/chickentikka.jpg" alt="" />
			</div>
			<CategoryList />
			<MenuList />
		</>
	);
};

export default CartePage;
