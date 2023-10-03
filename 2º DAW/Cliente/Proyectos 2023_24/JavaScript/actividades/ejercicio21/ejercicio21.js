/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha
o izquierda. La función debe tomar un array arr y un número entero pasos que indique
cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es
negativo).

 */
const rotarArray = (arr, pasos) => {
  if (pasos >= 0) {
    for(let i = 0; i < pasos; i++) {
      arr.unshift(arr.pop());
    }
  } else {
    for(let i = 0; i < Math.abs(pasos); i++) {
      arr.push(arr.shift());
    }
  }
  return arr;
};


