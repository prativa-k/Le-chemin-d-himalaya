import { use } from "react";
import type { ApiResponse } from "../../../models/api_response";
import CategoryListApiService from "../../services/category_api_service";
import type { Category } from "../../../models/category";
import CategoryListItem from "./category_list_item";


const CategoryList = () => {
  /* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
  const results = use<ApiResponse<Category[]>>(new CategoryListApiService().selectAll());

  return (
    <section>
      {results.data?.map((item) => (
        // item est passé en props
        <CategoryListItem key={item.id} data={item} />
      ))}
    </section>
  );
};

export default CategoryList;

