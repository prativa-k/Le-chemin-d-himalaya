import Seo from "../../components/seo/seo";
import styles from "../commander/commander.module.css"


const AvisPage = () => {
	return (
		<div className={styles.commander}>
			<Seo title="Avis" description="Avis - desc"  url="/" />
			<h2 className={styles.title}>Avis</h2>
		</div>
	);
};
export default AvisPage;
