/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto como argumento. Dicho objeto tienen como argumento o
valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la
propiedad 'b' del objeto 'a' en caso de que exista. Si no existe devolverá undefined
 */

function obtenerPropiedad(objeto) {
    if(objeto.hasOwnProperty('a') && typeof objeto.a === 'object' && objeto.a !== null) {
        return objeto.a['b'];
    }
    return undefined;
}
