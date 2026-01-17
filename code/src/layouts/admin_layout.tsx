// CSS globaux
import "../assets/css/reset.css";
import "../assets/css/base.css";

import { Outlet } from "react-router";
import AdminSideBar from "../components/admin/admin_sidebar";
import AdminTopBar from "../components/admin/admin_topbar";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const AdminLayout = () => {
	return (
		<>
		<NavBar />
		<div>
			<AdminSideBar />

			<div>
				<AdminTopBar />
				<main>
					<Outlet />
				</main>
			</div>
			</div>
			<Footer />
		</>
	);
};

export default AdminLayout;
