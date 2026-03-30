import React from 'react'
import styles from "../../assets/css/admin/admin_menu/admin_topbar.module.css"


const AdminTopBar = () => {
  return (
    <header className={styles.topbar}>
        {/* Le titre est centré pour faire office de bannière de page */}
        <h2 className={styles.dashTitle}>Tableau de bord</h2>
    </header>
  )
}

export default AdminTopBar
