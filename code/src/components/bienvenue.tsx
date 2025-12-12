import styles from "../assets/css/bienvenue.module.css";

const Bienvenue = () => {
	return (
		<>
            <div className={styles.titlebox}>
		    	<h2 className={styles.title}>Bienvenue Chez Nous</h2>
            </div>

            <div className={styles.about}>
                <p className={styles.description}>Bienvenue au Chemin de l'Himalaya!Envie d'une escapade délicieuse,venez découvrir la haute gastronomie indienne et népalaise dans votre restaurant le Chemin de l'Himalaya, à Evry, élu papilles d'Or 2009, meilleur restaurant de l'Essonne dans la catégorie « Cuisine du monde ». </p>

                <p className={styles.description}>Situé à un carrefour stratégique de la ville, à deux pas du centre commercial régional Agora, du Parc des Coquibus, de l'Hôtel de Ville, de l'université, de la cathédrale d'Evry, le Chemin de l'Himalaya, restaurant indien-népalais a le plaisir de vous accueillir chaleureusement, dans un cadre authentique et dépaysant</p>
            </div>
		</>
	);
};

export default Bienvenue;
