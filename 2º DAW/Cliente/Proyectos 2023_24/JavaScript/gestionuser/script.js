import { users } from "./asserts/modules.js";

/**
 * crear una funcion que le pase parametro un array de objetos, y me devuelva un 
 * map cuya clase sea: "lastname_firstname" y cuyo valor sea email de quellos usuarios que tengan email ".es";
 */

function crearMap(users) {
    const usersMap = new Map();
    users.forEach(user => {
        const key = `${user.lastname}_${user.firstname}`;
        if(user.email.endsWith(".es")){
            usersMap.set(key, user.email);
       
    }
}
);
    return usersMap;
}
console.log(crearMap(users));


const funcion = arr => arr.filter((obj) => obj.email.endsWith(".es")
.reduce((mapa,obj) => mapa.set(`${obj.lastname}_${obj.firstname}`, obj.email), new Map()));




