export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostarMesajeError(tipoDeInput, input)
    };
}

const mensajesError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacio",
        patternMismatch: "Por lo menos un nombre y un apellido"
    },
    name:{
        valueMissing: "Ponle un nombre a tu producto"
    },
    precio:{
        valueMissing: "Ponle un precio a tu producto"
    },
    descripcion:{
        valueMissing: "Describe tu producto",
        tooShort: "Escribe mínimo 10 caracteres"
    },
    mensaje:{
        valueMissing: "Este mensaje no puede estar vacio",
        tooShort: "Escribe mínimo 10 caracteres",
    },
    email: {
        valueMissing: "Este campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing: "Este campo contraseña no puede estar vacio",
        patternMismatch: "Mínimo 8 y máximo 16 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
    },
    url:{
        valueMissing: "Este campo URL no puede estar vacio",
        typeMismatch: "La URL no es valida"
    },
    categoria:{
        valueMissing: "Escoge una opcion"
    },
    nacimiento:{
        valueMissing: "Este campo nacimiento no puede estar vacio",
        customError: "Debes terner al menos 18 años de edad"
    },

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort"
];

function mostarMesajeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            mensaje = mensajesError[tipoDeInput][error];
        }
    })
    return mensaje
}