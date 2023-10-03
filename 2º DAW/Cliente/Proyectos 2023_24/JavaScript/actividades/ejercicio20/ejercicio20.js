/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays,
es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo
array con los elementos diferentes.
 */
const diferenciaArrays = (array1, array2) => {
  return array1.filter(elemento => !array2.includes(elemento));
};


