import Banner from "../components/banner";
import Bienvenue from "../components/bienvenue";
import Food from "../components/food";
import Seo from "../components/seo";

const HomePage = () => {

    // uniquement des composants
    //SEO
    return (
        <>
        <Seo title= "Acceuil" description= "Acceuil - description" url="/" />
        {/* <h2>HomePage</h2> */}
        <Banner />
        <Bienvenue />
        <Food />
        </>
    )
};

export default HomePage;