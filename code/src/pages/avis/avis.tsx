import AvisForm from "../../components/avis/avis_form";
import Seo from "../../components/seo/seo";
import styles from "../commander/commander.module.css"


const AvisPage = () => {
	return (
		<div className={styles.commander}>
			<Seo title="Avis" description="Avis - desc"  url="avis" />
			<AvisForm/>
		</div>
	);
};
export default AvisPage;
