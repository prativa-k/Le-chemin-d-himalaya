"use client";

import { useState } from "react";
// import { useState } from "react";
import { NavLink } from "react-router";

import styles from "../../assets/css/nav_bar.module.css";
import UserAdmin from "../admin/admin_home_content";
import Logo from "../logo/logo";

const NavBar = () => {
	//créer un état: hook useState

	const [navMobileIsVisible, setnavMobileIsVisible] = useState<boolean>(false);
	// gestionnaire d'évenement
	const handleclick = () => {
		// modifier la valeur de l'état: utiliser oblogatoirement le setter de l'état
		setnavMobileIsVisible(!navMobileIsVisible);

		// console.log(navMobileIsVisible);
	};

	return (
		<header>
			<Logo />
			<nav
				className={`${styles.nav} ${navMobileIsVisible ? styles["navbar-mobile-visible"] : ""}`}
			>
				<ul className={styles.list}>
					<li>
						<NavLink
							className={styles.link}
							onClick={() => setnavMobileIsVisible(false)}
							to={"/"}
						>
							Accueil
						</NavLink>
					</li>

					<li>
						<NavLink className={styles.link} to={"/reserver"}>
							Réserver
						</NavLink>
					</li>

					<li>
						<NavLink className={styles.link} to={"/commander"}>
							Commander
						</NavLink>
					</li>

					<li>
						<NavLink className={styles.link} to={"/galarie"}>
							Galaire
						</NavLink>
					</li>

					<li>
						<NavLink className={styles.link} to={"/avis"}>
							Avis
						</NavLink>
					</li>

					<li>
						<NavLink className={styles.link} to={"/carte"}>
							Carte
						</NavLink>
					</li>

					<li>
						<NavLink className={styles.link} to={"/contact"}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>

			<UserAdmin />

			{/* évenementclic  */}
			<button
				className={styles["menu_burger"]}
				onClick={handleclick}
				type="button"
			>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
		</header>
	);
};

export default NavBar;
