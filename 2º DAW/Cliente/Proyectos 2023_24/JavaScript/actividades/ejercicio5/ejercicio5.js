/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Define una función llamada contarPalabras que tome una cadena de texto texto y 
 * devuelva un objeto que cuente cuantas veces aparece cada palabra en el texto.
 */

const contarPalabras = texto => {
  
  const palabras = texto.split(' ');

  
  const conteo = {};

  
  palabras.forEach(palabra => {
    
    if (conteo[palabra]) {
      conteo[palabra]++;
    } else {
      
      conteo[palabra] = 1;
    }
  });

  
  return conteo;
};


const texto = "Este es un ejemplo de texto. Este texto tiene palabras repetidas.";
const resultado = contarPalabras(texto);
console.log(resultado);

  