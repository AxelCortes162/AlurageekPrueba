import { productoServicios } from "../servicios/productos-servicios.js";


const obetenerInformacionN = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    var imagen = document.querySelector("[data-imagen]");
    var nombre = document.querySelector("[data-producto]");
    var descripcion = document.querySelector("[data-descripcion]");
    var costo = document.querySelector("[data-costo]");

    productoServicios.detalleProductoN(id).then((nfts) => {
        nombre.innerHTML = nfts.nombre;

        imagen.src = nfts.imagenURL;

        costo.innerHTML = nfts.price;

        descripcion.innerText = nfts.descripcion;
    });

}

obetenerInformacionN()