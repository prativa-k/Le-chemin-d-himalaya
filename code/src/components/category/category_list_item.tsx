import type e from "express";
import type { MenuListItemProps } from "../../models/props/menu_list_item_props";

const CategoryListItem = ({ data }: MenuListItemProps) => {
	return (
		<details>
			<summary>{data.name}</summary>

			<p>
				{/* / cible le dossier public */}
				<img src="" alt="" />
			</p>
			<div> {data.price}</div>

			
				{data.orderables.map((e) => {
					return <li key={e.id}>
                         {e.name}</li>;
				})}
		
		</details>
	);
};

export default CategoryListItem;