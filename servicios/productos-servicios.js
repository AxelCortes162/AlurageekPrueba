// GET
const listaProductosP = () =>{
    return fetch("http://localhost:3000/playeras")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const listaProductosL = () =>{
    return fetch("http://localhost:3000/laptops")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}
const listaProductosN = () =>{
    return fetch("http://localhost:3000/nfts")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const perfiles = () =>{
    return fetch("http://localhost:3000/perfil")
    .then((respuesta) => respuesta.json())
    .catch(error => console.log(error))
}

//POST

const crearProductoP = (imagenURL, nombre, price, descripcion) => {
    return fetch("http://localhost:3000/playeras", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagenURL, nombre, price, descripcion, id: uuid.v4()})
    })

}


const crearProductoL = (imagenURL, nombre, price, descripcion) => {
    return fetch("http://localhost:3000/laptops", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({imagenURL, nombre, price, descripcion, id: uuid.v4()})
    })
}


const crearProductoN = (imagenURL, nombre, price, descripcion) => {
    return fetch("  http://localhost:3000/nfts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenURL,
            price,
            nombre,
            descripcion,
            id: uuid.v4()
        })
    });
}

const detalleProductoP = (id) =>{
    return fetch (`http://localhost:3000/playeras/${id}`).then((respuesta) => respuesta.json());
}

const detalleProductoL = (id) =>{
    return fetch (`http://localhost:3000/laptops/${id}`).then((respuesta) => respuesta.json());
}

const detalleProductoN = (id) =>{
    return fetch (`http://localhost:3000/nfts/${id}`).then((respuesta) => respuesta.json());
}

export const productoServicios = {
    listaProductosP,
    listaProductosL,
    listaProductosN,
    crearProductoP,
    crearProductoL,
    crearProductoN,
    detalleProductoP,
    detalleProductoL,
    detalleProductoN, 
    perfiles
}