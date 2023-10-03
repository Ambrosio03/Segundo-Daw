/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una
propiedad específica. La función debe tomar un array arr y una cadena propiedad que
indique la propiedad por la cual se debe ordenar.

 */
const ordenarPorPropiedad = (arr, propiedad) => {
  return arr.sort((a, b) => (a[propiedad] > b[propiedad]) ? 1 : ((b[propiedad] > a[propiedad]) ? -1 : 0));
};


