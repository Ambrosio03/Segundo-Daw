/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y
un número escalar . La función debe multiplicar cada elemento de la matriz por el escalar y
devolver una nueva matriz con los resultados.

 */
const multiplicarMatrizPorEscalar = (matriz, escalar) => {
  return matriz.map(fila => fila.map(elemento => elemento * escalar));
};

