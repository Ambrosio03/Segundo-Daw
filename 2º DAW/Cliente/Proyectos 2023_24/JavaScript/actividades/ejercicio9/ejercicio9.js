/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Crea una función llamada buscarElemento que toma un array arr y un elemento elemento . 
 * La función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se encuentra. .
 */

const buscarElemento = (arr, elemento) => {
  
  const indice = arr.indexOf(elemento);
  
  
  return indice;
};


const miArray = [1, 2, 3, 4, 5];
const elementoABuscar = 3;
const indiceEncontrado = buscarElemento(miArray, elementoABuscar);
console.log(indiceEncontrado); 

  