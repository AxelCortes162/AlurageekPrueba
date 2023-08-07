import { productoServicios } from "../servicios/productos-servicios.js";


const obetenerInformacionP = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    var imagen = document.querySelector("[data-imagen]");
    var nombre = document.querySelector("[data-producto]")
    var descripcion = document.querySelector("[data-descripcion]")

    productoServicios.detalleProductoP(id).then(playeras => {
        nombre.innerHTML = playeras.nombre;
        console.log(playeras.nombre)
        imagen.src = playeras.imagenURL;
        descripcion.innerText = playeras.descripcion;
    });
}

obetenerInformacionP()