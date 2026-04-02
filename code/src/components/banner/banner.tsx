import styles from "../../assets/css/banner/banner.module.css";

const Banner = () => {
	return (
		<section className={styles.banner} aria-label="Plat mis en avant">
		
				<img className={styles.img} fetchPriority="high" 
				
				src="/img/banner.avif" alt="Assiette de chicken tikka masala servie avec du riz"
				 />
		
			
		</section>
	);
};

export default Banner;
