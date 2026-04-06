import { Link } from "react-router";
import styles from "../../assets/css/our speciality/our_speciality.module.css";


const OurSpeciality = () => {
	return (
		<section
			className={styles.speciality}
			aria-labelledby="speciality-title"
		>
			<div className={styles.titlebox}>
				<h2 id="speciality-title" className={styles.title}>
					Nos spécialités
				</h2>
			</div>

			<ul className={styles.specialitybox}>
				<li className={styles.specialityitem}>
					<article aria-labelledby="dish-biryani-title">
						<img
							width="600" 
							height="400"
							loading="lazy"
							src="/img/Briyani.avif"
							alt="Plat de biryani au poulet servi avec du riz épicé"
						/>
						<h3 id="dish-biryani-title" className={styles.foodname}>
							Biryani
						</h3>
						<p className={styles.description}>
							Riz mijoté avec du poulet, des épices, des fruits secs et des noix de cajou.
						</p>
					</article>
				</li>

				<li className={styles.specialityitem}>
					<article aria-labelledby="dish-dhal-title">
						<img
							width="600" 
							height="400"
							loading="lazy"
							src="/img/dhalbhatmasu.avif"
							alt="Plat de dhal bhat masu servi avec du riz et viande au choix"
						/>
						<h3 id="dish-dhal-title" className={styles.foodname}>
							Dhal Bhat Masu
						</h3>
						<p className={styles.description}>
							Plat préféré des Népalais avec viande au choix, servi avec du riz.
						</p>
					</article>
				</li>

				<li className={styles.specialityitem}>
					<article aria-labelledby="dish-tikka-title">
						<img
							width="600" 
							height="400"
							loading="lazy"
							src="/img/chickentikka.avif"
							alt="Plat de chicken tikka masala avec sauce épicée"
						/>
						<h3 id="dish-tikka-title" className={styles.foodname}>
							Chicken Tikka Masala
						</h3>
						<p className={styles.description}>
							Poulet grillé au tandoor avec tomates, oignons et un riche mélange d’épices.
						</p>
					</article>
				</li>

				<li className={styles.specialityitem}>
					<article aria-labelledby="dish-paneer-title">
						<img
							width="600" 
							height="400"
							loading="lazy"
							src="/img/Panner tikka Mashala.avif"
							alt="Plat de paneer tikka masala avec fromage et curry"
						/>
						<h3 id="dish-paneer-title" className={styles.foodname}>
							Paneer Tikka Masala
						</h3>
						<p className={styles.description}>
							Cubes de fromage aux épices vertes et curry de Madras.
						</p>
					</article>
				</li>

				<li className={styles.specialityitem}>
					<article aria-labelledby="dish-chicken-chowmein-title">
						<img
							width="600" 
							height="400"
							loading="lazy"
							src="/img/chickenchowmein.avif"
							alt="Nouilles sautées au poulet, légumes croquants et sauce soja parfumée au gingembre."
						/>
						<h3 id="dish-chicken-chowmein-title" className={styles.foodname}>
							Chicken Chowmein
						</h3>
						<p className={styles.description}>
						Nouilles sautées au poulet, légumes croquants et sauce soja parfumée au gingembre.
						</p>
					</article>
				</li>

				

				<li className={styles.specialityitem}>
					<article aria-labelledby="dish-momo-title">
						<img
							width="600" 
							height="400"
							loading="lazy"
							src="/img/momo.avif"
							alt="Samossa aux légumes farci de pommes de terre, carottes et petits pois"
						/>
						<h3 id="dish-momo-title" className={styles.foodname}>
							Momo
						</h3>
						<p className={styles.description}>
						Raviolis à la vapeur farcis au poulet et gingembre. Servis avec un chutney.
						</p>
					</article>
				</li>
			</ul>

			<Link
				to="/carte"
				className={styles.decouvrir}
				aria-label="Découvrir plus de plats sur la carte"
			>
				Découvrir plus
			</Link>
		</section>
	);
};

export default OurSpeciality;
