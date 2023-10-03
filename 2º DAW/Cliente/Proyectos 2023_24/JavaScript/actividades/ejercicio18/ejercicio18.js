/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada combinarArrays que pase como parámetro "creciente" o
"decreciente", junto con un número indeterminado de arrays con valores numéricos.
Seguidamente me devolverá un array con todos los elementos que conformen los arrays
ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada
se hará de forma creciente
 */

const combinarArrays = (orden = 'creciente', ...arrays) => {
  let combinado = [].concat(...arrays);
  if (orden === 'decreciente') {
    return combinado.sort((a, b) => b - a);
  } else {
    return combinado.sort((a, b) => a - b);
  }
};


