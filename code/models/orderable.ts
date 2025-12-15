import type { Category } from "./category";
import type { OrderableSpice } from "./orderable_spice";
import type { OrderableType } from "./orderable_type";

type Orderable= {
    id:number;
    name:string;
    price:number;
    image:number;
    description:string;

    category_id:number;
    category:Category;

    orderable_type_id:number;
    orderable_type:OrderableType;

    orderable_spice_id:number;
    orderable_spice:OrderableSpice;
    
}

export type {Orderable};