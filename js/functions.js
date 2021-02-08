//constructores
function Producto(categoria, nombre, precio){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;

    this.mostrarProducto = function(){
        alert('Producto elegido:\n' + prodElegido.categoria + ' ' + prodElegido.nombre + '\n' + 'Precio: ' + prodElegido.precio);
    };
}
//funciones
function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date();
        } while(d2-d < ms);
}
function check_timeOut() {
    while (timeOut < 0 || timeOut > 10){
        timeOut = parseInt(prompt('Debe elegir un numero entre 0 y 10'));
    }
    return timeOut;
}
function solicitarProducto() {
    let categoria = prompt('Ingrese la categoria del producto elegido');
    let nombre = prompt('Ingrese el nombre del producto elegido');
    let precio = parseInt(prompt('Ingrese valor del producto elegido'));
    return new Producto(categoria, nombre, precio);
}
function solicitarEspera() {
    let esperaSeleccionada = null;
    do{
        esperaSeleccionada = prompt('Desea mas tiempo para elegir otro producto? Escriba "si" o "no" \n Escriba "cancelar" para terminar con la operatoria.').toLowerCase();
        console.log(esperaSeleccionada);
    } while ((esperaSeleccionada != "si") && (esperaSeleccionada != "no") && (esperaSeleccionada != "cancelar"));

    if(esperaSeleccionada == "si"){
        return true;
    }else{
        if(esperaSeleccionada == "no"){
            return false;
        }else{
            if(esperaSeleccionada == "cancelar"){
                return esperaSeleccionada;
            }else{ }
        }
    }
}




//código
/*
let prodElegido = null;
let eleccion = false;
let carrito = [];
let timeOut = parseInt(prompt('Bienvenido a Rustimuebles!! \nIngrese un numero (min 0 - max 10)para aguardar solicitarle los productos deseados. \n Por ejemplo,Si elige 5, deberá esperar 5 minutos'));
wait(check_timeOut()*60000);
do{
    prodElegido = solicitarProducto();
    carrito.push(prodElegido);
    prodElegido.mostrarProducto();
    eleccion = solicitarEspera();
    if(eleccion == true){
        timeOut = parseInt(prompt('Elija un numeor entre 0 y 10'))
        wait(check_timeOut()*60000);
    }
}while(eleccion != "cancelar")
console.log(carrito);
*/