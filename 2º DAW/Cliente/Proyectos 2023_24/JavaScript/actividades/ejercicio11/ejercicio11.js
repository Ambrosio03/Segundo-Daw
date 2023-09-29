/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada dividirFragmento que tome un array arr y un número entero
tamano . La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo
array con los Fragmentos.
 */
const dividirFragmento = (arr, tamano) => {
  
  if (tamano <= 0 || arr.length === 0) {
    return [];
  }

  
  const fragmentos = Math.ceil(arr.length / tamano);

  
  const resultado = [];
  for (let i = 0; i < fragmentos; i++) {
    const inicio = i * tamano;
    const fin = inicio + tamano;
    resultado.push(arr.slice(inicio, fin));
  }

  return resultado;
};


const miArray = [1, 2, 3, 4, 5, 6, 7];

