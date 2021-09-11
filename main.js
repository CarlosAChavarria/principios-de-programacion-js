/* Mi primer hola mundo (comentario)
alert("Hola mundo");*/

// variables
var nombre = "Carlos";
var apellido = 'Chavarria';
var edad = 23
//alert(nombre + " " + apellido + " y tengo " + edad);

// como saber el tipo de variable que es alguna usamos:
//typeof(nombre);
// imprimir en consola
/*console.log(typeof(nombre));
console.log(typeof(edad));*/

// Tipos de datos y constantes
// varaibles
let comidaFav = "Enchiladas";
let colorFav = "Verde";
let telefono;

telefono = 55110;

// constantes
const gravedad = 9.8;
// no se le puede cambiar el valor a una constante
//gravedad = "no hay gravedad";
const estudiantes = 20;

// diferencia entre let y var
var numero  = 40
if(true){
    var numero = 50;
    console.log(numero);
}
console.log(numero);

let numero2  = 100;
let numero2 = 40;
console.log(numero2);
if(true){
    let numero2 = 5;
    console.log(numero2);
}
console.log(numero2);