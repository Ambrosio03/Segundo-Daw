/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine
en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */
const unirArrays = (...arrays) => {
    return arrays.reduce((resultado, arr) => {
      return resultado.concat(arr);
    }, []);
  };
  
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5];
  const array3 = [6, 7, 8];
  
  const arrayUnido = unirArrays(array1, array2, array3);
  console.log(arrayUnido); 
  