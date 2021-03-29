/*modal mobile FILTRAR*/
let modal = document.getElementById('miModal');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

/*modal mobile ORDENAR*/
let modal_ordenar = document.getElementById('miModal_ordenar');
let abrir_ordenar = document.getElementById('abrir_ordenar');
let cerrar_ordenar = document.getElementById('close_ordenar');

abrir_ordenar.addEventListener('click', function(){
    modal_ordenar.style.display = 'block';
});

cerrar_ordenar.addEventListener('click', function(){
    modal_ordenar.style.display = 'none';
});

/*boton ordenar DESKTOP*/
function desplegar_menu(){
    var ancla = document.getElementsByClassName('main-dropdown__list--mostrar');
    for(var i=0; i < ancla.length; i++){
        ancla[i].classList.toggle('main-dropdown__list--ocultar');
    }
}

/*boton cart*/
