/**
 * @author: Ambrosio Iglesias Prieto
 * @description:Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es
decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver
true si la palabra es un palíndromo y false en caso contrario
 */
const esPalindromo = (palabra) => {
  let palabraReversa = palabra.split('').reverse().join('');
  return palabra === palabraReversa;
};


