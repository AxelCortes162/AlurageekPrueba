export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostarMesajeError(tipoDeInput, input)
    }
}

const mensajesError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacio",
        patternMismatch: "Por lo menos un nombre y un apellido"
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
    nacimiento:{
        valueMissing: "Este campo nacimiento no puede estar vacio",
        customError: "Debes terner al menos 18 años de edad"
    },
    numero:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 numeros"
    },
    direccion:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres"
    },
    ciudad:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La dirección debe contener entre 4 a 30 caracteres"
    },
    estado:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La dirección debe contener entre 4 a 30 caracteres"
    },
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort"
];

const validadores = {
    nacimiento: (input) => validarNacimiento(input)
}

function mostarMesajeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error)
            console.log(input.validity[error])
            console.log(mensajesError[tipoDeInput][error])
            mensaje = mensajesError[tipoDeInput][error];
        }
    })
    return mensaje
}

function validarNacimiento(input) {
    const fechaCliente = new Date (input.value);
    let mensaje = ""
    if(!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje)
}

function mayorEdad(fecha) { 
    const fechaActual = new Date ();
    const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual
}