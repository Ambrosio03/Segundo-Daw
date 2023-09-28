// const miSet = new ([1,2,3]);

// //añadir elementos 

// miSet.add(5);

// //eliminar elementos .delete()

// miSet.delete(5);

// //tamaño  .size

// miSet.size;

// // verificar si existe un elemento

// miSet.has(3);

// //como recorrer un set for (... of ...)

// for (let numero of miSet){
//     console.log(numero);
// }

// // convertir set en array

// const arrayNumeros = Array.from(miSet);

// //Spread operator para convertir array

// const arrayNumeros = [ ...miSet ];

// // operaciones con set 

// // UNIR 

// const c = new Set([1,2,3]);
// const d = new Set([3,2]);
// const cd = new Set( [ ...c  , ...d ]);

// // DIFERENCIA

// const c_d = new Set( [ ...c ].filter((num) => !d.has(num) ) );

// //interseccion 

// const c_i_d = new Set( [ ...c ].filter((num) => !d.has(num) ) );




// // EJEMPLOS

// //dados dos conjuntos set comprobar si son iguales elemento x elemento;

const a = new Set([1,2,3]);
const b = new Set([1,2,3]);

// const v = (s1,s2) => s1.size !== s2.size ? false : s1.has( ...s2 );
// console.log(v(a,b));

// si un conjunto esta dentro de otro conjunto

const v2 = (s1,s2) => !s1.has( ...s2 ) ? false : true;

console.log(v2(a,b));