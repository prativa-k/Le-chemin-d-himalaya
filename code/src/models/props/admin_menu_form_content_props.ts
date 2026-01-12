import type { ZodError } from "zod/v3";
import type { Menu } from "../../../models/menu";
import type { Orderable } from "../../../models/orderable"


type AdminMenuFormContentProps = {
    orderables: Orderable[];
    validator: (data: Partial<Menu>) => Promise<Partial<Menu> | ZodError>;
};

export type {AdminMenuFormContentProps}