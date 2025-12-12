import { Outlet } from "react-router";
import NavBar from "../components/navbar";
import Banner from "../components/banner";

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
		</>
	);
};

export default PublicLayout;
