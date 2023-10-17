/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores
(temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los
valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son
números para realizar la suma.
 */

function sumarTemperaturas(objeto) {

    for (let key in objeto) {
        if (typeof objeto[key] === 'number') {
            suma += objeto[key];
        }
    }
    return suma;
}