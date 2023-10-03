// objetos

const color ={
    red : 0,
    green : 50,
    blue : 120,
}

//funcion constructora...

function Persona(nombre,edad,cp){
    this.nombre = nombre;
    this.edad = edad;
    this.cp = cp;

}

const pepe = new Persona("pepe",23,18000);

//clases

class Persona2{
    constructor(nombre,edad,cp){
        this.nombre = nombre;
        this.edad = edad;
        this.cp = cp;
    }
}
const pepa = new Persona2("pepa",24,18000);

// Object.create

const sara = Object.create(null);

sara.nombre = "sara";
sara.edad = 22;
sara.cp= 18600;

//estrella

const luis = {};
luis.nombre = "sara";
luis.edad = 22;
luis.cp= 18600;



// ejemplo

const user = {
    id : 890,
    name : "Luis",
    geo : {
        coordx : 45,
        coordy : 90,
    },
    books : ["libro1","libro2","libro3","libro4"],
    basura : "menuda m....",
    carnet : true,
}

delete user.basura;

for ( let clave of Object.keys(user)){
    console.log(clave);
}

for ( let valores of Object.keys(user)){
    console.log(valores);
}
for ( let [clave,valor] of Object.keys(user)){
    console.log(`clave=${clave} valor=${valor}`);
}
const newUser = Object.freeze(user);


for (const clave in user){
    console.log(clave);
} 