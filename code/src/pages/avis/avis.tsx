"use client";
import { NavLink } from "react-router";
import styles from "./avis.module.css"
import AvisForm from "../../components/avis/avis_form";
import Seo from "../../components/seo/seo";
import SecurityService from "../../services/security_service";

const AvisPage = () => {
	const user = new SecurityService().getUser();

	return (
		<div className={styles.commander}>
			<Seo
				title="Avis"
				description="Laissez-nous un avis sur notre cuisine"
				url="avis"
			/>

			<div className={styles.avisContent}>
				<h1 className={styles.pageTitle}>Livre d'or</h1>

				{user ? (
					/* Si l'utilisateur est connecté, on affiche le formulaire */
					<div className={styles.formSection}>
						<p className={styles.welcome}>Ravi de vous revoir!</p>
						<AvisForm />
					</div>
				) : (
					/* Si l'utilisateur n'est pas connecté, on affiche les liens */
					<div className={styles.authPrompt}>
						<p>Vous devez être connecté pour publier un avis.</p>
						<div className={styles.authLinks}>
							<NavLink to="/register" className={styles.linkRegister}>
								S'enregistrer
							</NavLink>
							<span className={styles.separator}>ou</span>
							<NavLink to="/login" className={styles.linkLogin}>
								Connexion
							</NavLink>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AvisPage;
