import type e from "express";
import type { MenuListItemProps } from "../../models/props/menu_list_item_props";

const CategoryListItem = ({ data }: MenuListItemProps) => {
	return (
		<section id={`#${data.name}`}>
			<h3>{data.name}</h3>

			<p>
				{/* / cible le dossier public */}
				<img src="" alt="" />
			</p>
			<div> {data.price}</div>

			{data.orderables.map((e) => {
				return <li key={e.id}>{e.name}</li>;
			})}
		</section>
	);
};

export default CategoryListItem;
