/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales)
y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays
con la misma cantidad de filas y columnas.

 */
const sumarMatrices = (matriz1, matriz2) => {
  return matriz1.map((fila, i) => fila.map((elemento, j) => elemento + matriz2[i][j]));
};


