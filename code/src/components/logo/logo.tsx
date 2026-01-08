
import styles from "../../assets/css/logo.module.css"
import { Link } from "react-router"

const Logo = () => {
	return (
		<div className={styles.logo}>
			<h1 className={styles.h1}>Le chemin d'himalaya</h1>
		<Link to={"/"}><img src="/img/logo.jpg

		" alt="logo" /></Link>	
		</div>
	);
};

export default Logo;
