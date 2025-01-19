
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const valetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
const valnumeros = /^\d+$/;
const valemail = /^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ@.\s]+$/;

const valSoloLetras = (texto) => {

    if(!valetras.test(texto[texto.length-1])){

        return texto.replace(texto[texto.length-1],'')
    }
    return texto
}
const valNegativos = (texto) => {
    if(!valnumeros.test(texto[texto.length-1])){

        return texto.replace(texto[0],'')
    }
    return texto
}
const valSoloNumeros =(texto) =>{
   
    if(!valnumeros.test(texto[texto.length-1])){

        return texto.replace(texto[texto.length-1],'')
    }
    return texto
}

const valCaracEmail = (texto) =>{

    if(!valemail.test(texto[texto.length-1])){
        return texto.replace(texto[texto.length-1],'')
    }
    return texto

}

const valCorreo = (texto) =>{

    return emailRegex.test(texto)

}

function tieneValoresNulosOVacios(obj) {
    for (const clave in obj) {
      if (obj[clave] === "" || obj[clave] === null) {
        return false;
      }
    }
    return true; 
  }

export {valSoloLetras,valSoloNumeros,valCorreo,valNegativos,valCaracEmail,tieneValoresNulosOVacios};