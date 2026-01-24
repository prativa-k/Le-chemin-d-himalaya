import Seo from "../../components/seo/seo";
import styles from "./commander.module.css"


const CommanderPage = () => {
    return (
        <>
            <div className={styles.commander}>
                
            <Seo title= "Commander" description= "Commander - description" url="/" />
            <h2 className={styles.title}>Commander</h2>
        </div>
        

        </>
    );
}

export default CommanderPage;