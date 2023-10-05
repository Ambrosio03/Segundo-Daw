/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga
propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el
objeto.
 */

function crearObjeto(a, b) {
    let objeto = {};
    for(let i = 0; i < a.length; i++) {
        objeto[a[i]] = b[i];
    }
    return objeto;
}

let a =["nombre", "apellidos"];
let b =["a", "b"];

console.log(crearObjeto(a,b));