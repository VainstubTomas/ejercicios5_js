// const arrayTest = [1];

// arrayTest.push(12, 45, 12);

// for (let i = 0; i < arrayTest.length; i++) {
//     console.log("en el indice " + i + "esta el valor -> " + arrayTest[i]);
// }

//.push para subir valores
//.pop elimina el ultimo indice
//.shift elimina el 1er elemento
//.unshift agrega en el indice 0

//convierte el array en strings
// console.log(arrayTest.join(" | "));

//retorna lap posicion del elemento
// console.log(arrayTest.indexOf(45));
// console.log(arrayTest.indexOf(450)); // retorna -1 xq no existe ese elemento

// //consulta si el valor existe o no (bool)
// console.log(arrayTest.includes(45));
// console.log(arrayTest.includes(450));

// const arrayTexto = ["Lionel", "Andres", "Messi"];

// console.log(arrayTexto.sort()); //ordena alfabeticamente, reverse es el opuesto

//OBJ

// const producto = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 200
// }

// console.log(producto);


//array de objetos

// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 200
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 300
//     },
//     {
//         id: 3,
//         nombre: "Leche",
//         precio: 100
//     }
// ];

//agrego un producto nuevo al array

// const productoNuevo = {
//     id: 4,
//     nombre: "messi",
//     edad: 36,
// }

// productos.push(productoNuevo);

// console.log(productos);

//CLASE - moldes para lo obj - cada obj que haga es una instancia de la clase

//constructor: funcion q permite pasar parametros

//metodo: funcion propia para un objeto

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    SumarIva() {
        this.precio = parseFloat((this.precio * 1.21).toFixed(2)) //toFixed solo 2 decimales
    }
}

const productos = [];

//new crea una instancia de Producto
productos.push(new Producto(1, "Banana", 200));
productos.push(new Producto(2, "Coca", 200));
productos.push(new Producto(3, "Frutilla", 200));

//for of
for (const Producto of productos) {
    Producto.SumarIva();
    console.log(`El producto con ID ${Producto.id}`);
}

//Templates `${}`
