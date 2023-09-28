/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño.
La función debe devolver un nuevo array que contenga la suma de los elementos
correspondientes de arr1 y arr2 .
 */

const sumaArrays = (arr1, arr2) => {
    const resultado = [];
    if (arr1.length !== arr2.length) {
      resultado = "error";
    }else{
      for (let i = 0; i < arr1.length; i++) {
        resultado.push(arr1[i] + arr2[i]);
      }
    
      return resultado;
    }
    
    
  };
  
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const resultado = sumaArrays(array1, array2);
  console.log(resultado); 
  