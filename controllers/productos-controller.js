import { productoServicios } from "../servicios/productos-servicios.js";

console.log(productoServicios)

const crearNuevoProducto = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("proindex", "producto");

    const contenido = `
    
        <a href="producto.html?id=${id}">
        <img 
            class="producto__img" 
            src="${imagenURL}" 
            alt="imagen camisa">
        <div class="producto__inf">
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">${price}</p>
        </div>
        </a>
    `

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
}

const playeras = document.querySelector("[data-product]");

productoServicios.listaProductos().then((data)=>{
    data.forEach((producto) => {
        const nuevoProducto = crearNuevoProducto(producto.nombre, producto.imagenURL, producto.price)
        playeras.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"))
