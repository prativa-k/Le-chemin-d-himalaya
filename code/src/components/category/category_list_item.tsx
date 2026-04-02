import type e from "express";
import styles from "../../assets/css/category/category_list_item.module.css";
import type { MenuListItemProps } from "../../models/props/menu_list_item_props";

const CategoryListItem = ({ data }: MenuListItemProps) => {
	return (
		<section id={`${data.name}`} className={styles.categorySection}>
			<h3 className={styles.categoryTitle}>{data.name}</h3>

			<div className={styles.itemsList}>
				{data.orderables.map((e) => {
					return (
						<div key={e.id} className={styles.menuRow}>
							<span className={styles.dishName}> {e.name}</span>
							<span className={styles.dishPrice}>{e.price}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default CategoryListItem;
