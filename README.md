# IVA
Calcular el precio a pagar del iva.

Este proyecto se creó en TypeScript para calcular el subtotal, el impuesto sobre el valor agregado y el total de una compra. El usuario puede ingresar los precios de varios productos y el sistema calcula automáticamente los valores correspondientes.

El proyecto se organizó de una manera específica para mantener el código ordenado y fácil de entender. Esto se logró utilizando una estructura que incluye modelos, datos y servicios.

**Estructura del Proyecto**

* Models: Aquí se encuentran las clases, interfaces y enumeraciones que se utilizan en el sistema.

* Data: Este es el lugar donde se almacenan los datos que se utilizan durante la ejecución del programa.

* Services: Aquí se encuentra la lógica de negocio que se utiliza para realizar los cálculos.

* Index: Este es el archivo principal que interactúa con el usuario y muestra los resultados.

**Funcionalidades**

1. El usuario puede ingresar varios productos.

2. El sistema calcula automáticamente el subtotal.

3. El sistema calcula el impuesto sobre el valor agregado utilizando una tasa del 12%.

4. El sistema calcula el total a pagar.

5. Los resultados se presentan de manera clara en la consola.

**Tecnologías Utilizadas**

* TypeScript

* Node.js

* PNPM

* Prompt-Sync

**Ejemplo de Uso**

¿Cuántos productos desea ingresar? 3

Ingrese el precio del producto 1: Q100

Ingrese el precio del producto 2: Q50

Ingrese el precio del producto 3: Q25

========== FACTURA ==========

Productos: [100, 50, 25]

Subtotal: Q175.00

Impuesto sobre el valor agregado: Q21.00

Total: Q196.00

En conclusión, este proyecto permitió aplicar conceptos básicos de TypeScript, como el uso de clases, interfaces, enumeraciones, módulos y servicios. Además, ayudó a entender cómo organizar un proyecto de manera estructurada y cómo implementar cálculos básicos que se pueden utilizar en aplicaciones de ventas y facturación.