import type { MenuDetailsProps } from "../../../models/props/menu_details_props";

const MenuDetailsContent = ({ data }: MenuDetailsProps) => {
    return (
        <section>
            <h2>Menu détails </h2>
            <h3> {data.name}</h3>
       
            <h5> {data.id}</h5>
            {data.orderables.map((item) => (
                <li key={item.id}>{item.category_id} {item.name} {item.price} {item.orderable_type_id} {item.orderable_spice_id} {item.description} {item.image} </li>
            )
        )}
        </section>
    );
};

export default MenuDetailsContent;