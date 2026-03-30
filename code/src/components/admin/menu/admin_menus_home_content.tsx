// import { Link, NavLink } from "react-router";
import { use } from "react";
import { Link } from "react-router";
import MenuApiService from "../../../services/menu_api_service";
import styles from "../../../assets/css/admin/admin_menu/admin_menus_home_content.module.css"

const AdminMenusHomeContent = () => {
	//récupération des menus
	const results = use(new MenuApiService().selectAll()).data;
	// console.log(results);

	return (
		<section className={styles.adminhome}>
  <h2 className={styles.gestion}>Gestion des menus</h2>

  <div className={styles.topActions}>
    <Link to={"/admin/menu/form"} className={styles.addButton}>
      Ajouter un menu
    </Link>
  </div>

  <div className={styles.menuGrid}>
    {results?.map((item) => (
      <div key={item.id} className={styles.menuSquare}>
        <h3 className={styles.menuName}>{item.name}</h3>

        <div className={styles.cardActions}>
          <Link to={`/admin/menu/form/${item.id}`} className={styles.modifyLink}>
            Ajouter
          </Link>

          <Link to={`/admin/menu/delete/${item.id}`} className={styles.deleteLink}>
            Supprimer
          </Link>
        </div>
      </div>
    ))}
  	</div>
	</section>
	);
};

export default AdminMenusHomeContent;
