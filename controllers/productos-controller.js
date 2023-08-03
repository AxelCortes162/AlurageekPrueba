import { productoServicios } from "../servicios/productos-servicios.js";

console.log(productoServicios)

const crearNuevoProductoP = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");

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

const crearNuevoProductoL = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");

    const contenidoLaptops = `
    
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

    card.innerHTML = contenidoLaptops;
    card.dataset.id = id;

    return card;
}


const crearNuevoProductoN = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");

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


const divPlayeras = document.querySelector("[data-productP]");
const divLaptops = document.querySelector("[data-productL]");
const divNfts = document.querySelector("[data-productN]");

productoServicios.listaProductosP().then((data)=>{
    data.forEach((playeras) => {
        const nuevoProducto = crearNuevoProductoP(playeras.nombre, playeras.imagenURL, playeras.price, playeras.descripcion)
        divPlayeras.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"));


productoServicios.listaProductosL().then((data)=>{
    data.forEach((laptops) => {
        const nuevoProducto = crearNuevoProductoL(laptops.nombre, laptops.imagenURL, laptops.price, laptops.descripcion)
        divLaptops.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"));


productoServicios.listaProductosN().then((data)=>{
    data.forEach((nfts) => {
        const nuevoProducto = crearNuevoProductoN(nfts.nombre, nfts.imagenURL, nfts.price, nfts.descripcion)
        divNfts.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"));
