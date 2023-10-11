// // insertar elementos en el LocalStorage

// const usuario = {"name": "ambrosio", "email": "upchh@example.com"};
// localStorage.setItem("nombre", "Ambrosio");
// localStorage.setItem("user", JSON.stringify(ususario));

const myName =[];
/**
 * @description crear una pagina web que tenga la siguiente estructura : un header que ocupe todo el ancho de la pagina que tenga el el nombre de nuestro proyecto
 * , seguidamente tendremos dos secciones que parten la pagina en 2 partes justamente por la mita. la parte de la izquieda dispondremos de un formulario
 * loguin que contendra los campos username pasword y boton . la parte de la derecha tendremos untitulo que diga usuarios almacenados localstorage y un text area junto con el boton de cargar
 * La funcionalidad sera la siguirnte
 * cargaremos todos los usuarios con una variable llamada users y atravez de una funcion que le pasemos esa veriable guardara los username y el password de dichos 
 * usuarios dentro del local storage. la password sera incriptada 
 * A traves del formulario introduciere un nombre y una contraseña si el nombre no esta guardado en el local storage alamcenaremos el usuarios y la contrseña encriptada
 * en el local storage. si ya esta guardad mostraremos el nombre y la contraseña en el formulario
 * 
 * a traves del boton carggar sacaremos el nombre y password desencriptada de todos los usuarios almacenados en el formularion
 * 
 */


function insertUsers(clave,structureData){
    return localStorage.setItem(clave,JSON.stringify(structureData));
}

insertUsers("myUsers",usuarios);

function loadStrct(clave){
    JSON.parse(localStorage.getItem(clave));
}

 myName = loadStrct("myUsers");

 // guardar en una estructura de datos el username y el password codificado de tos los usuarios de mi estructura 
 // y de los usuarios que vaya a añadir sin repetir el username


function saveUserPasssword(key, structUser) {
    structUser.map{(user) =>console.log(user.login.username, btoas(user.login.password))};
}