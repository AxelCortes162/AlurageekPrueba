import { productoServicios } from "../servicios/productos-servicios.js";



const crearNuevoProductoP = (nombre, imagenURL, precio, descripcion, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");

    const contenidoPlayeras = `
    
        <a href="producto-playeras.html?id=${id}">
        <img 
            class="producto__img" 
            src="${imagenURL}" 
            alt="imagen camisa">
        <div class="producto__inf">
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">$${precio}</p>
        </div>
        </a>
    `

    card.innerHTML = contenidoPlayeras;
    card.dataset.id = id;

    return card;
}

const crearNuevoProductoL = (nombre, imagenURL, price, descripcion, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");
    const contenidoLaptops = `
    
    <a href="producto-laptops.html?id=${id}">
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


const crearNuevoProductoN = (nombre, imagenURL, price, descripcion, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");


    const contenidoNfts = `
    <a data-hrefproduc href="producto-nfts.html?id=${id}">
        <img 
        class="producto__img" 
        src="${imagenURL}" 
        alt="imagen laptop">
        <div class="producto__inf">
            <p data-nombreBus class="producto__nombre">${nombre}</p>
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

productoServicios
    .listaProductosP()
    .then((data)=>{
        data.forEach(({nombre, imagenURL, price, descripcion, id}) => {
            const nuevoProducto = crearNuevoProductoP(nombre, imagenURL, price, descripcion, id)
            divPlayeras.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"));


productoServicios.listaProductosL().then((data)=>{
    data.forEach(({nombre, imagenURL, price, descripcion, id}) => {
        const nuevoProducto = crearNuevoProductoL(nombre, imagenURL, price, descripcion, id)
        divLaptops.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"));


productoServicios.listaProductosN().then((data)=>{
    data.forEach((nfts) => {
        const nuevoProducto = crearNuevoProductoN(nfts.nombre, nfts.imagenURL, nfts.price, nfts.descripcion, nfts.id)
        divNfts.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"));


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productCards = document.querySelectorAll("[data-tipo]"); // Capturamos todos los elementos a buscar
    searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "resultado_busqueda.html"
  
      const searchTerm = searchInput.value.toLowerCase();
  
      // Filtrar los elementos según el término de búsqueda
      productCards.forEach((card) => {
        const productName = card.querySelector(".producto__nombre").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
        });
    });
})


    // Step 1: Select the search input and the product car