import type { Orderable } from "./orderable";

// reprendre strictement les noms des colonnes de la table SQL
type Menu = {
    id:number;
    name:string;
    price:number;


    // liste concaténée des identifiants des plats
    orderable_ids: string;
    orderables: Orderable[];
};


export type {Menu};