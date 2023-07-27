import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
        console.log(inputs);
    }); 
})

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    window.location.href = "loggin_completo.html"
    console.log( "YA SE Hizp CLICK")
})
 
// app.js
