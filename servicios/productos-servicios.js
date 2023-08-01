// GET
const listaProductos = () =>{
    return fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

//POST

const crearProducto = (imagenURL, nombre, price, seccion, descripcion) => {
    fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenURL,
            price,
            nombre,
            seccion,
            descripcion
        })
    }).then(respuesta =>{
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear e producto")

}

export const productoServicios = {
    listaProductos,
    crearProducto
}