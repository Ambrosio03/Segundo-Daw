/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de menor a mayor.
 **/

const ordenarNumeros = arr => {
  
  arr.sort((a, b) => a - b);
  
  
  return arr;
};


const numeros = [4, 2, 8, 1, 5];
const numerosOrdenados = ordenarNumeros(numeros);
console.log(numerosOrdenados); 

  