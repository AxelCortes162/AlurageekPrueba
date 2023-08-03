import { productoServicios } from "../servicios/productos-servicios.js";

const crearNuevoProducto = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("producto");

    const contenidoNfts = `
    <a href="producto.html?id=${id}">
        <img 
        class="producto__img" 
        src="${imagenURL}" 
        alt="imagen laptop">
        <div class="producto__inf">
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">$${price}</p>
        </div>
    </a>
    `

    card.innerHTML = contenidoNfts;
    card.dataset.id = id;

    return card;
}

const divNfts = document.querySelector("[data-productN]");

productoServicios.listaProductosN().then((data)=>{
    data.forEach((nfts) => {
        const nuevoProducto = crearNuevoProducto(nfts.nombre, nfts.imagenURL, nfts.price)
        divNfts.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"))