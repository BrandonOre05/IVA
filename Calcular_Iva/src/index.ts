import promptSync from "prompt-sync";

import { Compra } from "./models/Compra.js";
import { ImpuestoEnum } from "./models/ImpuestoEnum.js";

import { productos } from "./data/CompraData.js";

import { CompraService } from "./services/CompraService.js";

const prompt = promptSync();

const compraService = new CompraService();

const cantidad = Number(
    prompt("¿Cuántos productos desea ingresar? ")
);

for (let i = 0; i < cantidad; i++) {

    const precio = Number(
        prompt(`Ingrese el precio del producto ${i + 1}: Q`)
    );

    productos.push(precio);
}

const compra = new Compra(productos);

const subtotal = compraService.calcularSubtotal(
    compra.productos
);

const iva = compraService.calcularIVA(
    subtotal,
    ImpuestoEnum.IVA
);

const total = compraService.calcularTotal(
    subtotal,
    iva
);

console.log("\n========== FACTURA ==========");

console.log("Productos:", compra.productos);
console.log("Subtotal: Q" + subtotal.toFixed(2));
console.log("IVA: Q" + iva.toFixed(2));
console.log("Total: Q" + total.toFixed(2));