import type { Orderable } from "./orderable";

type Category = {
    id:number;
    name:string;
    price:number;
    
    //list concate
    orderable_ids: string,
    orderables: Orderable[]
}

export type {Category}