/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Define una función llamada invertirCadena que tome una cadena cadena y devuelva una
nueva cadena con los caracteres en orden inverso.

 */
const invertirCadena = cadena => { return cadena.split('').reverse().join('')};


let invertida = invertirCadena("hola");
console.log(invertida);
