
import styles from "../../assets/css/bienvenue/bienvenue.module.css";

const Bienvenue = () => {
	return (
		<>
            <div className={styles.titlebox}>
		    	<h2 className={styles.title}>Bienvenue Chez Nous</h2>
            </div>

            <div className={styles.about}>
                <p className={styles.description}>Bienvenue au Chemin de l’Himalaya, restaurant indien et népalais à Évry, élu <span className={styles.bold}>Papilles d’Or 2009 </span> et reconnu comme meilleur restaurant de l’Essonne dans la catégorie 
                     <span className={styles.bold}> "Cuisine du monde".</span> </p>

                <p className={styles.description}>Apprécié par nos clients, nous sommes fiers d’afficher une note de  <span className={styles.bold}>4,4/5 </span> sur  <span>TripAdvisor</span> et  <span className={styles.bold}>4,5/5</span> sur <span className={styles.bold}>Google</span>, gages de la qualité de notre cuisine et de notre accueil.</p>

                <p className={styles.description}>Nous vous invitons à venir vivre une expérience authentique et savoureuse.</p>
            </div>

     
		</>
	);
};

export default Bienvenue;
