import type { Orderable } from "./orderable";

type Category = {
    id:number;
    name:string;
  
    
    //list concate
    orderable_ids: string,
    orderables: Orderable[]
}

export type {Category}