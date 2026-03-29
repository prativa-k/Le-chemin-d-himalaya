"use client";
import { useState } from "react";
// import { useState } from "react";
import { Link, NavLink } from "react-router";
import styles from "../../assets/css/nav/nav_bar.module.css";
import SecurityService from "../../services/security_service";
import UserAdmin from "../admin/admin_home_content";
import Logo from "../logo/logo";

// const navLinks = [
// 	{ label: "Accueil", to: "/" },
// 	{ label: "Réserver", to: "/reserver" },
// 	{ label: "Commander", to: "/commander" },
// 	{ label: "Galerie", to: "/galerie" },
// 	{ label: "Avis", to: "/avis" },
// 	{ label: "Carte", to: "/carte" },
// 	{ label: "Contact", to: "/contact" },
// 	{ label: "S'enregister", to: "/register" },
// 	{ label: "Connexion", to: "/login" }
// ];

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
				{/* <ul className={styles.list}>
					{navLinks.map((link) => (
						<li key={link.to}>
							<NavLink
								className={styles.link}
								to={link.to}
								onClick={() => setnavMobileIsVisible(false)}
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul> */}

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
						<NavLink className={styles.link} to={"/galerie"}>
							Galerie
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

			<div className={styles.rightSide}>
				<ul className={styles.authList}>
					{
						// si l'utilisateur est connecté
						new SecurityService().getUser() ? (
							<li>
								<NavLink to={"/logout"} onClick={handleclick}>
									Déconnexion
								</NavLink>
							</li>
						) : (
							// si l'utilisateur n'est pas connecté
							<>
								<li>
									<NavLink to={"/register"}>S'engistrer</NavLink>
								</li>

								<li>
									<NavLink to={"/login"}>Connexion</NavLink>
								</li>
							</>
						)
					}
					{
						// si l'utilisateur est admin

						new SecurityService().getUser()?.role.name === "admin" ? (
							<li>
								<NavLink to={"/admin"} onClick={handleclick}>
									{" "}
									<UserAdmin />
								</NavLink>
							</li>
						) : (
							<></>
						)
					}
				</ul>
			</div>

			{/* <NavLink to={"/register"}>S'enregister</NavLink>
			<NavLink to={"/login"}>Connexion</NavLink> */}

			{/* évenementclic  */}
			<button
				className={`${styles.menuburger}
				${navMobileIsVisible ? styles.open : " "}`}
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
