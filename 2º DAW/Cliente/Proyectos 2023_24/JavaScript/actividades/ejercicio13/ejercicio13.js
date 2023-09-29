/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Define una función llamada extraerPropiedades que tome un objeto obj y un array de
propiedades . La función debe devolver un nuevo objeto que contenga solo las propiedades
especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en
el nuevo objeto.
 */

function extraerPropiedades(obj, propiedades) {
  let nuevoObjeto = {};
  propiedades.forEach(prop => {
      if(obj.hasOwnProperty(prop)) {
          nuevoObjeto[prop] = obj[prop];
      }
  });
  return nuevoObjeto;
}


let objeto1 = {a: 1, b: 2};

let arr = [a,b];

let extraer = extraerPropiedades(objeto1,arr);