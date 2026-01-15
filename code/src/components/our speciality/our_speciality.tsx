import { Link } from "react-router";
import styles from "../../assets/css/our speciality/our_speciality.module.css";

const OurSpeciality = () => {
	return (
		<>
			<div className={styles.titlebox}>
				<h2 className={styles.title}>Notre Spécialité</h2>
			</div>

			<div className={styles.specialitybox}>
				<div className={styles.speciality}>
					<img src="/img/Briyani.jpg" alt="briyani" />
					<p className={styles.foodname}>Briyani</p>
					<p className={styles.description}>
						Riz mijoté avec du poulet aux épices fruit sec cajou
					</p>
				</div>
				<div className={styles.speciality}>
					<img src="/img/dhalbhatmasu.jpg" alt="briyani" />
					<p className={styles.foodname}>Dhal Bhat Masu</p>
					<p className={styles.description}>
						Plat préféré des népalais avec la viande au choix servie avec du riz
					</p>
				</div>
				<div className={styles.speciality}>
					<img src="/img/chickentikka.jpg" alt="briyani" />
					<p className={styles.foodname}>Chicken Tikka Mashala</p>
					<p className={styles.description}>
						Poulet grillé au tandoor avec des tomates oignions agrémenté d'un
						riche mélange d'épices
					</p>
				</div>
				<div className={styles.speciality}>
					<img src="/img/chickenchowmein.jpg" alt="briyani" />
					<p className={styles.foodname}>Himalaya chicken chaw chaw</p>
					<p className={styles.description}>
						Nouilles sautés avec du poulet aux épices népalaises
					</p>
				</div>

				<Link to={"/carte"} className={styles.decouvrir}>
					Découvrir plus
				</Link>
			</div>
		</>
	);
};

export default OurSpeciality;
