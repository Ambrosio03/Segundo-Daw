/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Dado el siguiente objeto que representa un punto en coordenadas, utiliza la desestructuración para
extraer las propiedades x y y en variables separadas y calcula la distancia euclidiana desde el origen
(0,0).
 **/
const punto = {
    x: 3,
    y: 4,
   };
   
   
   const {x, y} = punto;
   
   const distancia = Math.sqrt(x*x + y*y);
   
   console.log(`La distancia desde el origen hasta el punto (${x},${y}) es ${distancia}`);
   