import { InterfazCompra } from "./InterfazCompra.js";

export class Compra implements InterfazCompra {

    constructor(
        public productos: number[]
    ) {}

}