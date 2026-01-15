"use client"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminMenuParams } from "../../../models/props/params/admin_menu_params";
import MenuApiService from "../../../services/menu_api_service";
import Seo from "../../../components/seo/seo";

const AdminMenuDelete = ({params }:AdminMenuParams) => {
	// uniquement des composants
	//SEO

	// récupérer la variable d'URL
	const {id} = params;

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// suprimmer à l'affichage du composant / page
	useEffect(() => {
		// await n'est pas disponible dans useEffect
		// la méthode then equivaut à await
		new MenuApiService().Delete({id: id}).then( () => {
			// the path of the website
			navigate("/admin/menu");
		});

	}, [id, navigate]);
	return (
		<>
			{/* uniqument des composants */}

			<Seo title="Acceuil" description="Acceuil - description" url="/" />
			
		</>
	);
};

export default AdminMenuDelete;
