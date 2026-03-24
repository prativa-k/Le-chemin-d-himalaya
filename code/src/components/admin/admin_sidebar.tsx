import React from 'react'
import { NavLink } from 'react-router';
import style from "../../assets/css/admin/admin_menu/admin_sidebar.module.css";

const AdminSideBar = () => {
  return (
    <div>
      <NavLink to= "/admin/menu" className={style.sidebar}>
        Gestion des plats
      </NavLink>
    </div>
  )
}

export default AdminSideBar;
