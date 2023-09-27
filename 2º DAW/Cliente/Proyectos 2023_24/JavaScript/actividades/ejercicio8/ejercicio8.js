/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Defina una función llamada encontrarMaxMin que tome un array de números arr y
 *  devuelva un objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array, 
 *  respectivamente..
 */

const encontrarMaxMin = arr => {
  
  if (arr.length === 0) {
    return {
      max: undefined,
      min: undefined
    };
  }

  
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  
  return {
    max,
    min
  };
};


const numeros = [4, 2, 8, 1, 5];
const resultado = encontrarMaxMin(numeros);
console.log(resultado); 

  