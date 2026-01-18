import { Link } from "react-router";
import styles from "../../assets/css/our speciality/our_speciality.module.css";

const OurSpeciality = () => {
	return (
		<div className={styles.speciality}>
			<div className={styles.titlebox}>
			<h2 className={styles.title}>Notre Spécialités</h2>
			</div>

		
			<div className={styles.specialitybox}>
				<div className={styles.specialityitem}>
					<img src="/img/Briyani.jpg" alt="briyani" />
					<p className={styles.foodname}>Briyani</p>
					<p className={styles.description}>
						Riz mijoté avec du poulet aux épices fruit sec cajou
					</p>
				</div>
				<div className={styles.specialityitem}>
					<img src="/img/dhalbhatmasu.jpg" alt="dhalbhatmashala" />
					<p className={styles.foodname}>Dhal Bhat Masu</p>
					<p className={styles.description}>
						Plat préféré des népalais avec la viande au choix servie avec du riz
					</p>
				</div>
				<div className={styles.specialityitem}>
					<img src="/img/chickentikka.jpg" alt="chickentikka" />
					<p className={styles.foodname}>Chicken Tikka Mashala</p>
					<p className={styles.description}>
						Poulet grillé au tandoor avec des tomates oignions agrémenté d'un
						riche mélange d'épices
					</p>
				</div>
				<div className={styles.specialityitem}>
					<img src="/img/chickenkorma.jpg
					" alt="chowmein" />
					<p className={styles.foodname}> Shahi Chicken Korma</p>
					<p className={styles.description}>
					Poulet désossé dans une sauce doux aux amandes
					</p>
				</div>

				<div className={styles.specialityitem}>
					<img src="/img/Panner tikka Mashala.jpg" alt="Panner Tikka Mashala" />
					<p className={styles.foodname}>Panner Tikka Mashala</p>
					<p className={styles.description}>
					Cube de fromage avec des épices verts et curry de madras
					</p>
				</div>
				
				<div className={styles.specialityitem}>
					<img src="/img/samosa.jpg" alt="samosa" />
					<p className={styles.foodname}>Samossa légume</p>
					<p className={styles.description}>
					Feuilleté de pomme de terre farcie au petit poids, carotte, noix de cajou aux épices
					</p>
				</div>

				
			</div>

				
				<Link to={"/carte"} className={styles.decouvrir}>
					Découvrir plus
				</Link>
			
				
			
		</div>
	);
};

export default OurSpeciality;
