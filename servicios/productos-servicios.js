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

//POST

const crearProductoP = (imagenURL, nombre, price, descripcion, id) => {
    fetch("http://localhost:3000/playeras", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenURL,
            price,
            nombre,
            descripcion,
            id
        })
    }).then(respuesta =>{
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")

}


const crearProductoL = (imagenURL, nombre, price, descripcion, id) => {
    fetch("http://localhost:3000/laptops", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenURL,
            price,
            nombre,
            descripcion,
            id
        })
    }).then(respuesta =>{
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")

}


const crearProductoN = (imagenURL, nombre, price, descripcion, id) => {
    fetch("http://localhost:3000/nfts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenURL,
            price,
            nombre,
            descripcion,
            id
        })
    }).then(respuesta =>{
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")

}

export const productoServicios = {
    listaProductosP,
    listaProductosL,
    listaProductosN,
    crearProductoP,
    crearProductoL,
    crearProductoN
}