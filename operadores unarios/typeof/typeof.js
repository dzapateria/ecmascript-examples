typeof 2; //=> 'number
typeof ""; //=> 'string'
typeof true; //=> 'boolean'
typeof Object; //=> 'function'
typeof {}; //=> 'function'
typeof foobar; // => 'undefined'; variable inexistente
typeof undefined; //=> 'undefined';
typeof null; //=> 'object'
typeof [1, 2]; //=> 'object'

/*
 * Variables 
 */

let puntos = 33;
let mensaje = "Bienvenido";
let estado = true;
var tripleDe = a => a * 3;
let lista = ['Lunes', 'Martes', puntos, mensaje];

console.log(typeof tripleDe);