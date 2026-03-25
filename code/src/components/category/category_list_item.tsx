import type e from "express";
import type { MenuListItemProps } from "../../models/props/menu_list_item_props";

const CategoryListItem = ({ data }: MenuListItemProps) => {
	return (
		<section id={`${data.name}`}>
			<h3>{data.name}</h3>

			<p>
				{/* / cible le dossier public */}
				<img src="" alt="" />
			</p>

			{data.orderables.map((e) => {
				return (
					<p key={e.id}>
						{/* <img src={`/img/${e.image}`} alt="" /> */}
						{e.name} - {e.price}
					</p>
				);
			})}
		</section>
	);
};

export default CategoryListItem;
