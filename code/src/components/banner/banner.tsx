import styles from "../../assets/css/banner.module.css";

const Banner = () => {
	return (
		<div className={styles.banner}>
			<img className={styles.img} src="/img/food.jpg" alt="banner"/>
		</div>
	);
};

export default Banner;
