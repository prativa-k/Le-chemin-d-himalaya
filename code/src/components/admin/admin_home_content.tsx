import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router";
import styles from "../../assets/css/nav/nav_bar.module.css";


const AdminHomeContent = () => {
	return (
		<Link className={styles.admin} to={"/admin/menus"}>
			<RiAdminFill /> 
		</Link>
		// <NavLink className={styles.admin} to={"/admin/menus"}>
		// 	<RiAdminFill />
		// </NavLink>
	);
};

export default AdminHomeContent;
