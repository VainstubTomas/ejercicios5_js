//Crea un array de objetos de productos, dentro de las propiedades de sus objetos agrega las siguientes (id, nombre, precio, cantidad, subtotal)

const productos = [];

class IntroducirProducto {
    constructor(id, nombre, precio, cant, subtotal){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cant = cant;
        this.subtotal = this.calcularSubtotal();
    }
    //como el subtotal es una funcion propia de la clase se crea aqui adentro
    calcularSubtotal() {
        return this.precio * this.cant;
    }
}

//en base a estos promps se calcula el subtotal

let id = parseInt(prompt("Ingrese el id del producto"));
let nombre = prompt("Ingrese el nombre del producto");
let precio = parseFloat(prompt("Ingrese el precio del producto"));
let cant = parseInt(prompt("Ingrese la cantidad de su stock"));

// celular.productos.push(new Celular(id, nombre, almacenamiento, precio));
productos.push(new IntroducirProducto(id, nombre, precio, cant));

console.log(productos);