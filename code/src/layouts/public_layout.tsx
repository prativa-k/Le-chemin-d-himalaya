import { Outlet } from "react-router";

import NavBar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import Bienvenue from "../components/bienvenue/bienvenue";
import OurSpeciality from "../components/our speciality/our_speciality";

// import NavBar from "../components/navbar";

const PublicLayout = () => {
	return (
		<>
			{/* {uniquement des composants} */}
			{/* {lien d'évitement} */}
			{/* {header} */}
			{/* {nav} */}
			<NavBar />
			<Banner />
			<Bienvenue />
			<OurSpeciality />
			

			{/* {contenu de la page enfant} */}
			<Outlet />
		</>
	);
};

export default PublicLayout;
