import { productoServicios } from "../servicios/productos-servicios.js";

const crearNuevoProducto = (nombre, imagenURL, price, id) => {
    const card = document.createElement("div");
    card.classList.add("producto");

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

const divLaptops = document.querySelector("[data-product]");

productoServicios.listaProductosL().then((data)=>{
    data.forEach((laptops) => {
        const nuevoProducto = crearNuevoProducto(laptops.nombre, laptops.imagenURL, laptops.price)
        divLaptops.appendChild(nuevoProducto);
    });
})
.catch((error)=>("ocurrio un error"))