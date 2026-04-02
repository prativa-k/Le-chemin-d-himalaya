
import styles from "../../assets/css/logo/logo.module.css"
import { Link } from "react-router"


const Logo = () => {
	return (
		<div className={styles.logo}>
			<h1 className={styles.h1}>Le chemin d'himalaya</h1>
			<Link to={"/"}><img 	
			 src="/img/logo.webp
		

		" alt="Le Chemin d'Himalaya Logo" /></Link>	
		
		</div>
	);
};

export default Logo;
