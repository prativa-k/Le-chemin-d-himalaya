// CSS globaux
import "../assets/css/reset.css";
import "../assets/css/base.css";

import { Outlet } from "react-router";
import AdminSideBar from "../components/admin/admin_sidebar";
import AdminTopBar from "../components/admin/admin_topbar";

const AdminLayout = () => {
	return (
		<div>
			<AdminSideBar />

			<div>
				<AdminTopBar />
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
