/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las
propiedades del objeto original. excepto la propiedad con clave 'b'.
 */

function obtenerObjetoSinPropiedadB(objeto) {
    let objetoSinPropiedadB = {};
    for (let key in objeto) {
        if (key!== 'b') {
            objetoSinPropiedadB[key] = objeto[key];
        }
    }
    return objetoSinPropiedadB;
}