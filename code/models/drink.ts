import type { DrinkType } from "./drink_type";

type Drink= {
    id:number;
    name:string;

    drink_type_id:number;
    drink_type:DrinkType
}

export type {Drink};