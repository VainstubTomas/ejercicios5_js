const arrayTest = [1];

arrayTest.push(12, 45, 12);

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
console.log(arrayTest.indexOf(45));
console.log(arrayTest.indexOf(450)); // retorna -1 xq no existe ese elemento

//consulta si el valor existe o no (bool)
console.log(arrayTest.includes(45));
console.log(arrayTest.includes(450));