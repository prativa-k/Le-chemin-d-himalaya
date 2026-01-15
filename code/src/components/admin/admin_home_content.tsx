import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router";
import styles from "../../assets/css/admin/admin_home_content.module.css"


const AdminHomeContent = () => {
	return (
		<Link className={styles.admin} to={"/admin"}>
			<RiAdminFill /> 
		</Link>
		
		// <NavLink className={styles.admin} to={"/admin/menus"}>
		// 	<RiAdminFill />
		// </NavLink>
	);
};

export default AdminHomeContent;
