/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades nombre y edad en
variables separadas. Después crear un objeto con dichas propiedades y los valores obtenidos.
 **/
const persona = {
    nombre: "Juan",
    edad: 30,
   };

const {nombre : nombre1 ,edad : edad1} = persona;

const persona2 = {
    nombre: nombre1,
    edad: edad1,
};

console.log(persona2);