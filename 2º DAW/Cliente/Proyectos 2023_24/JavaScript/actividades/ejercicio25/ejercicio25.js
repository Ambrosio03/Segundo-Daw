/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada numerosFaltantes que encuentre los números faltantes en un
rango dado dentro de un array. La función debe tomar un array de números arr y dos
números enteros inicio y fin que representan el rango. La función debe devolver un array
con los números que faltan en ese rango.
 */
const numerosFaltantes = (arr, inicio, fin) => {
  let faltantes = [];
  for(let i = inicio; i <= fin; i++) {
    if(!arr.includes(i)) {
      faltantes.push(i);
    }
  }
  return faltantes;
};
