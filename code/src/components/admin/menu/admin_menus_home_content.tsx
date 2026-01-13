// import { Link, NavLink } from "react-router";
import { use } from "react";
import { Link } from "react-router";
import MenuApiService from "../../../services/menu_api_service";

const AdminMenusHomeContent = () => {
	//récupération des menus
	const results = use(new MenuApiService().selectAll()).data;
	// console.log(results);

	return (
		<section>
			{/* <p>AdminMenusHomeContent</p> */}

			<h2>Géstion des Menu</h2>
			<Link to={"/admin/menus/form"}>ajouter</Link>

			{/* affichage des menus */}
			{results?.map((item) => {
				return (
					<div key={item.id}>
						<p> {item.name}</p>
						<p>
							<Link to={`/admin/menus/form/${item.id}`}>Modifier</Link>
							<Link to={""}>Suprimer</Link>
						</p>
					</div>
				);
			})}
		</section>
	);
};

export default AdminMenusHomeContent;
