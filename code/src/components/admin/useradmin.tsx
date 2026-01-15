import React from 'react'
import { NavLink } from 'react-router'
import styles from "../../assets/css/admin/admin_home_content.module.css"
import { RiAdminFill } from 'react-icons/ri'


const UserAdmin = () => {
  return (
    <div>
      <NavLink className={styles.admin} to={"/admin "}>
      <RiAdminFill /> 
      </NavLink>
    </div>
  )
}

export default UserAdmin
