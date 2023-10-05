/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.
 */

function hasKey(a,b){
    if(a.hasOwnProperty(b)){
        return true;
    }else{
        return false;
    }
}