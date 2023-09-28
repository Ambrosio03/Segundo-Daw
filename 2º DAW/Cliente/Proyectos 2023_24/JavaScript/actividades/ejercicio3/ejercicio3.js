/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Crea una función llamada filtrarPares que tome un array de números arr y devuelva un
nuevo array que contenga solo los números pares.
 **/
const filtrarPares = (arr) => arr.filter(numero => numero % 2 === 0);

  
  
  const numeros = [1, 2, 3, 4, 5, 6];
  const pares = filtrarPares(numeros);
  console.log(pares); 