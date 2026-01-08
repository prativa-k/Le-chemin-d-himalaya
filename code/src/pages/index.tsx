import Banner from "../components/banner/banner";
import Bienvenue from "../components/bienvenue/bienvenue";
import Food from "../components/food/food";
import Seo from "../components/seo/seo";

const HomePage = () => {
	// uniquement des composants
	//SEO
	return (
		<>
			<Seo title="Acceuil" description="Acceuil - description" url="/" />
			{/* <h2>HomePage</h2> */}
			<Banner />
			<Bienvenue />
			<Food />
		</>
	);
};

export default HomePage;
