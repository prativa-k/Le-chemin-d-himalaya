// CSS globaux
import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";
import AdminSideBar from "../components/admin/admin_sidebar";
import AdminTopBar from "../components/admin/admin_topbar";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import styles from "../assets/css/admin/admin_layout.module.css"
import Guard from "../components/guard/guard";


const AdminLayout = () => {
	return (
		<Guard roles={['admin']}>
        <NavBar />
        {/* On utilise flex ici pour que la sidebar soit à gauche et le reste à droite */}
        <div className={styles.adminContainer}>
            <AdminSideBar />

            <div className={styles.contentWrapper}>
                <AdminTopBar />
                <main className={styles.mainOutlet}>
                    <Outlet />
                </main>
            </div>
        </div>
        <Footer />
    </Guard>
	);
};

export default AdminLayout;
