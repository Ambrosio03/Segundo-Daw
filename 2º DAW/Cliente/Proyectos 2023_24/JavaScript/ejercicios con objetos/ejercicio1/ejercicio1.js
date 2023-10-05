/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea
pais. Si no existiese dicha clave devolvería : "No se encuentra"
 */

const objeto = {
    continente:"europa",
    pais: "España",
};

function pais(objeto){
    if(objeto.hasOwnProperty('pais')){
        return objeto.pais;
    }else{
        return "No se encuentra";
    }
}


console.log(pais(objeto));