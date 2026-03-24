import AdminHomeContent from "../../components/admin/admin_home_content";
import style from "../../assets/css/admin/admin.module.css"


const Admin = () => {
	return (
		<>
			<h2 className={style.admin}>Admin</h2>
			<AdminHomeContent />
			

		</>
	);
};

export default Admin;
