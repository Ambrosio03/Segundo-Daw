/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una
función funcion . La función debe aplicar la función proporcionada a cada elemento del array y
devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */

const mapearNumeros = (arr,funcion) => arr.map(funcion);

let numeros = [1, 2, 3, 4, 5];
let cuadrados = mapearNumeros(numeros, numero => numero * numero);
console.log(cuadrados);


