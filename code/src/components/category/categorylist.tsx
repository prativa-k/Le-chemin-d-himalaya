import { use, useRef } from "react";
import { Link } from "react-router";
import type { ApiResponse } from "../../../models/api_response";
import type { Category } from "../../../models/category";
import CategoryListApiService from "../../services/category_api_service";
import CategoryListItem from "./category_list_item";
import styles from "../../assets/css/category/category_list.module.css"

const CategoryList = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
	const results = use<ApiResponse<Category[]>>(
		new CategoryListApiService().selectAll(),
	);



	return (
		<section className={styles.carteContainer}>
		
			<div className={styles.categoryNav}>
				{results.data?.map((item) => (
					// item est passé en props
					<a href={`#${item.name}`} key={item.id} className={styles.list}>
						{item.name}
					</a>
				))}
			</div>

			{/* {results.data?.map((item) => (
				// item est passé en props
				<p key={item.id}> {item.name}</p>
			))} */}
			<div className={styles.menuList}>
			{results.data?.map((item) => (
				// item est passé en props
				<CategoryListItem key={item.id} data={item} />
			))}
			</div>
		</section>
	);
};

export default CategoryList;
