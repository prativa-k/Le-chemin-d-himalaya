import { use } from "react";
import { Link } from "react-router";
import type { ApiResponse } from "../../../models/api_response";
import type { Category } from "../../../models/category";
import CategoryListApiService from "../../services/category_api_service";
import CategoryListItem from "./category_list_item";

const CategoryList = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
	const results = use<ApiResponse<Category[]>>(
		new CategoryListApiService().selectAll(),
	);

	return (
		<section>
			<div>
				{results.data?.map((item) => (
					// item est passé en props
					<a href={`#${item.name}`} key={item.id}>
						{item.name}
					</a>
				))}
			</div>

			{/* {results.data?.map((item) => (
				// item est passé en props
				<p key={item.id}> {item.name}</p>
			))} */}

			{results.data?.map((item) => (
				// item est passé en props
				<CategoryListItem key={item.id} data={item} />
			))}
		</section>
	);
};

export default CategoryList;
