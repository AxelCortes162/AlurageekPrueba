import { productoServicios } from "../servicios/productos-servicios.js";

console.log(productoServicios)

const crearNuevoProducto = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("producto");

    const contenidoPlayeras = `
    
        <a href="producto.html?id=${id}">
        <img 
            class="producto__img" 
            src="${imagenURL}" 
            alt="imagen camisa">
        <div class="producto__inf">
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">$${price}</p>
        </div>
        </a>
    `

    card.innerHTML = contenidoPlayeras;
    card.dataset.id = id;

    return card;
}

const divPlayeras = document.querySelector("[data-product]");

productoServicios.listaProductosP().then((data)=>{
    data.forEach((playeras) => {
        const nuevoProducto = crearNuevoProducto(playeras.nombre, playeras.imagenURL, playeras.price)
        divPlayeras.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"))

