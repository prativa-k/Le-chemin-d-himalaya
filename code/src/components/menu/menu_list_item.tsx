import type e from "express";


import type { MenuListItemProps } from "../../models/props/menu_list_item_props";

const MenuListItem = ({ data }: MenuListItemProps) => {
	return (
		<article>
			<h2>{data.name}</h2>

			<p>
				{/* / cible le dossier public */}
				<img src="" alt="" />
			</p>
			<div> {data.price}</div>

			<ul>
				{data.orderables.map((e) => {
					return <li key={e.id}> {e.name}</li>;
				})}
			</ul>
		</article>
	);
};

export default MenuListItem;
