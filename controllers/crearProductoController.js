import { productoServicios } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-addForm]");
    

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    var categoria = document.querySelector("[data-categoria]");

    if(categoria.value == "playeras"){
        window.location.href = "playeras.html";
        productoServicios.crearProductoP(url, nombre, precio, descripcion)
        .then(respuesta => {
        console.log(respuesta)
        }).catch(error => {
            console.log("ERROR")
        });
    } else{
        if (categoria.value == "laptops"){
            window.location.href = "laptos.html";
            productoServicios.crearProductoL(url, nombre, precio, descripcion)
            .then(respuesta => {
                console.log(respuesta)
            })
            .catch(error => {
                console.log("ERROR")
            });
        } else{
            if (categoria.value == "nfts") {
                window.location.href = "nfts.html";
                productoServicios.crearProductoN(url, nombre, precio, descripcion)
            .then(respuesta => {
                console.log(respuesta)
            })
            .catch(error => {
                console.log("ERROR")
            });
            }
        }
    }
})