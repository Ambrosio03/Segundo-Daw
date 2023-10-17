/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del
segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y
corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades
'a', 'b', 'c', 'd' y 'e'.
 */

function fusionarObjetos(objeto1, objeto2) {
    let objetoFusionado = {};
    for (let key in objeto1) {
        objetoFusionado[key] = objeto1[key];
    }
    for (let key in objeto2) {
        if (key!== 'b') {
            objetoFusionado[key] = objeto2['d'];
        
    }
    objeto1[key] = objeto2[key];
    return objetoFusionado;
}