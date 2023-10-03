/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada rangoNumeros que tome dos números inicio y fin . La
función debe devolver un array que contenga todos los números en el rango desde inicio
hasta fin , incluyendo ambos números
 */
const rangoNumeros = (inicio, fin) => {
  let array = [];
  for(let i = inicio; i <= fin; i++){
      array.push(i);
  }
  return array;
};

let rangos = rangoNumeros(1,5);
console.log(rangos);