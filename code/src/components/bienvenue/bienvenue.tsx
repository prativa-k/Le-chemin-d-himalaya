
import styles from "../../assets/css/bienvenue/bienvenue.module.css";

const Bienvenue = () => {
	return (
		<section className={styles.bienvenue} aria-labelledby="bienvenue-title">
            <div className={styles.titlebox}>
		    	<h2 className={styles.title} id="bienvenue-title">Bienvenue Chez Nous</h2>
            </div>

            <div className={styles.about}>
                <p>Bienvenue au Chemin de l’Himalaya, restaurant indien et népalais à Évry, élu Papilles d’Or 2009 et reconnu comme meilleur restaurant de l’Essonne dans la catégorie 
             "Cuisine du monde".</p>

                <p >Apprécié par nos clients, nous sommes fiers d’afficher une note de  4,4/5 sur TripAdvisor et  4,5/5 sur Google, gages de la qualité de notre cuisine et de notre accueil.</p>

                <p>Nous vous invitons à venir vivre une expérience authentique et savoureuse.</p>
            </div>

     
		</section>
	);
};

export default Bienvenue;
