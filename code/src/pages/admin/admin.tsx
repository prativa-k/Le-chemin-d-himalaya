import AdminHomeContent from "../../components/admin/admin_home_content";
import style from "../../assets/css/admin/admin.module.css"
import SecurityService from "../../services/security_service";
"use client"


const Admin = () => {
	return (
		<>
			<h2 className={style.admin}>Admin</h2>
			<AdminHomeContent />

			{/* afficher l'utilisateur stocké 
			{JSON.stringify(new SecurityService().getUser())} */}
			

		</>
	);
};

export default Admin;
