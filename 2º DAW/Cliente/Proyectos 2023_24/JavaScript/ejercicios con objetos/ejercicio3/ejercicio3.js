/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,
no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

function e3(a,b){
    if(a.hasOwnProperty(b) && b != null && b != undefined && b != false){
        return true;
    }else{
        return false;
    }
}