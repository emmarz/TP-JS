let carrito = [];
let total = 0;


function agregarAlCarrito(id){
    let pos = buscarId(id);
    let producto = new producto(baseDeDatos[pos].id,
                                baseDeDatos[pos].nombre,
                                baseDeDatos[pos].precio,
                                baseDeDatos[pos].url);
    carrito.push(producto);
    //falta codigo para el html
}

function crearJson(array){
    
    
}