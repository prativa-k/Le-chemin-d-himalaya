import Seo from "../../components/seo/seo";
import styles from "../commander/commander.module.css"

const GaleriePage = () => {
    return (
        <div className={styles.commander}>
            <Seo title= "Galerie" description= "Galarie - description" url="/" />
             <h2 className={styles.title}>Galerie</h2>
        </div>
       
    );
}

export default GaleriePage;