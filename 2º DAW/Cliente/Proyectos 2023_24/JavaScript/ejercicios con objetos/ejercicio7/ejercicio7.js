/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las
claves de los objetos.
 */

function matriz(a){
    const keys = [];

    for( const key of Object.keys(a)){
        keys.push(key);
    }
    return keys;
}