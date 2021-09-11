
// function suma(num1, num2){
//     var resultado = num1 + num2;
//     console.log(resultado);
// }

// suma(10,5);

// var valor = "5";
// console.log(parseInt(valor) + 20)

/*/var clientes = new Array(); //creamos el array clientes con los valores de cuenta
var clientes = [10,15,20]; // asignamos los valores al array
clientes.reverse(); //Ordenamos los valores del array para conseguir el mayor
console.log(clientes[0]); //Imprimimos el mayor de los valores en consola*/

//declaro arreglo
var cantidades = [];
// pido valores al usuario
/*cantidades[0] = parseInt(prompt("Ingresa el primer valor:"));
cantidades[1] = parseInt(prompt("Ingresa el segundo valor:"));
cantidades[2] = parseInt(prompt("Ingresa el tercer valor:"));*/
//10,15,8

cantidades[0] = prompt("Ingresa el primer valor:");
cantidades[1] = prompt("Ingresa el segundo valor:");
cantidades[2] = prompt("Ingresa el tercer valor:");

console.log(typeof(cantidades[0]));

cantidades.sort(function(a, b) {return a - b});

console.log(cantidades[0]);
console.log(cantidades[1]);
console.log(cantidades[2]);