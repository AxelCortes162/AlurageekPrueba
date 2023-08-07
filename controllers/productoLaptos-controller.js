import { productoServicios } from "../servicios/productos-servicios.js";


const obetenerInformacionL = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    var imagen = document.querySelector("[data-imagen]");
    var nombre = document.querySelector("[data-producto]")
    var descripcion = document.querySelector("[data-descripcion]")

    productoServicios.detalleProductoL(id).then((laptops) => {
        nombre.innerHTML = laptops.nombre;

        imagen.src = laptops.imagenURL;

        descripcion.innerText = laptops.descripcion;
    });

}

obetenerInformacionL()