import React from 'react'
import { NavLink } from 'react-router';

const AdminSideBar = () => {
  return (
    <NavLink to= "/admin/menu">
        Gestion des plats
    </NavLink>
  )
}

export default AdminSideBar;
