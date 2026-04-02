import Banner from "../components/banner/banner";
import Bienvenue from "../components/bienvenue/bienvenue";
import OurSpeciality from "../components/our speciality/our_speciality";
import Seo from "../components/seo/seo";

const HomePage = () => {
	// uniquement des composants
	//SEO
	return (
		<>
			<Seo title="Acceuil" description="Acceuil - description" url="/" />
			{/* <h2>HomePage</h2> */}
			<main>
				<Banner />
				<Bienvenue />
				<OurSpeciality />
			</main>
		</>
	);
};

export default HomePage;
