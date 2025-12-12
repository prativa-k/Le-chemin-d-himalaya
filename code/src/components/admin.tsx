import { RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router";
import styles from "../assets/css/admin.css.module.css";

const UserAdmin = () => {
	return (
		<NavLink className={styles.admin} to={"/admin"}>
			<RiAdminFill />
		</NavLink>
	);
};

export default UserAdmin;
