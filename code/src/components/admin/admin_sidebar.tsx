import React from 'react'
import { NavLink } from 'react-router';
import styles from "../../assets/css/admin/admin_menu/admin_sidebar.module.css";

const AdminSideBar = () => {
  return (
    
      <aside className={styles.sidebar}>
        {/* Ce titre indique à l'utilisateur qu'il est dans la zone admin */}
        <h2 className={styles.sidebarTitle}>Administration</h2>
        <nav>
          <NavLink to="/admin/menu" className={styles.navItem}>
            Gestion des plats
          </NavLink>
        </nav>
      </aside>
  )
}

export default AdminSideBar;
