/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función llamada eliminarElemento que tome un array arr y un elemento
elemento , y elimine la primera aparición de ese elemento en el array.
 */
const eliminarElemento = (arr, elemento) => {
  
  const index = arr.indexOf(elemento);

  
  if (index !== -1) {
    
    arr.splice(index, 1);
  }

  
  return arr;
};


const miArray = [1, 2, 3, 4, 5];
const elementoAEliminar = 3;
const nuevoArray = eliminarElemento(miArray, elementoAEliminar);
console.log(nuevoArray);


  