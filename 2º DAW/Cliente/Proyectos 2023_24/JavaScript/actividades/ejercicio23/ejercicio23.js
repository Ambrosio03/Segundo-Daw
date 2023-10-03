/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada promedioFilas que calcule el promedio de cada fila en una
matriz (array bidimensional) y devuelva un array con los resultados.

 */
const promedioFilas = (matriz) => {
  return matriz.map(fila => fila.reduce((a, b) => a + b, 0) / fila.length);
};
