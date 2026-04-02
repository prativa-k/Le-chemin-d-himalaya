import React from 'react'
import { NavLink } from 'react-router'
import styles from "../../assets/css/admin/admin_home_content.module.css"


const UserAdmin = () => {
  return (
    <div>
      <NavLink className={styles.admin} to={"/admin"}>
      
      </NavLink>
    </div>
  )
}

export default UserAdmin;
