
import Seo from "../../components/seo/seo";
import styles from "../../assets/css/menu/carte_page.module.css"
import CategoryList from "../../components/category/categorylist";
import MenuList from "../../components/menu/menu_list";


const CartePage = () => {
	return (
		<main>
			<Seo title="Carte" description="Découvrez la carte du Chemin de l’Himalaya à Évry-Courcouronnes : spécialités indiennes et népalaises, plats traditionnels, entrées, grillades tandoori, options végétariennes et desserts savoureux." url="/carte" />
			
			<div className={styles.menuBanner}>
				<img src="/img/chickentikka.avif" alt="chicken tikka mashala" />
			</div>

			<CategoryList/>
			<MenuList/>
		
		</main>
	);
};

export default CartePage;
