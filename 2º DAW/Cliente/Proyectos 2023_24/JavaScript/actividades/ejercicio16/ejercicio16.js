/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva
una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás
en minúscula.

 */
const capitalizarPalabras = (cadena) => {
  return cadena
    .split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
};

