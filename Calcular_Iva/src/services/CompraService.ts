export class CompraService {

    public calcularSubtotal(
        productos: number[]
    ): number {

        let subtotal = 0;

        for (const precio of productos) {
            subtotal += precio;
        }

        return subtotal;
    }

    public calcularIVA(
        subtotal: number,
        porcentajeIVA: number
    ): number {

        return subtotal * (porcentajeIVA / 100);
    }

    public calcularTotal(
        subtotal: number,
        iva: number
    ): number {

        return subtotal + iva;
    }

}