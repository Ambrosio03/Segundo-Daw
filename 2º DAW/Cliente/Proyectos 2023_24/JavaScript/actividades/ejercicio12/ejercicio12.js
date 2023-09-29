/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como
objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo.
 */


const combinarObjetos = (obj1, obj2) => {
  return {...obj1, ...obj2};
};



let objeto1 = {a: 1, b: 2};
let objeto2 = {c: 3, d: 4};
let objetoCombinado = combinarObjetos(objeto1, objeto2);
console.log(objetoCombinado); 