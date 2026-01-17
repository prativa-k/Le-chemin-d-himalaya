import { Outlet } from "react-router";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";


// import NavBar from "../components/navbar";

const PublicLayout = () => {
	return (
		<>
			{/* {uniquement des composants} */}
			{/* {lien d'évitement} */}
			{/* {header} */}
			{/* {nav} */}
			<NavBar />
			

			{/* {contenu de la page enfant} */}
			<Outlet />

			<Footer />
			
		</>
	);
};

export default PublicLayout;
