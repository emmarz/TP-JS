let cart = {};

//agregar item al carrito
let addToCart = e => {
    if(e.target.classList.contains('bbtn_addToCart')){
        setCart(e.target.parentElement);
    }
    e.stopPropagation();
}

let setCart = object =>{
    console(object);
}



//carga los elementos guardados en baseDate en el DOM, solo cuando se hayan cargado completamente el DOM.
//document.addEventListener('DOMContentLoaded', e =>{ loadData()});
$(function() {
    loadData();
});

function loadData() {
    let i;
    let lengthDB = dataBase.length;
    let contentToAdd;
    for(i = 0; i < lengthDB; i++){
        let refLocation = document.getElementById('main-productos');
        let productDiv = document.createElement('div');
        productDiv.setAttribute('id', dataBase[i].id);
        productDiv.setAttribute('class', 'col-12 col-sm-6 col-md-4 p-0 mx-2 producto');
//primer bloque - imagen
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'text-center');

        let img = document.createElement('img');
        img.setAttribute('src', dataBase[i].url);
        img.setAttribute('alt', dataBase[i].name);
        imgDiv.appendChild(img);
        productDiv.appendChild(imgDiv);
//segundo bloque - texto
        let textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'text-center producto_texto');

        let nameSpan = document.createElement('span');
        contentToAdd = document.createTextNode(dataBase[i].name);
        nameSpan.appendChild(contentToAdd);

        let priceSpan = document.createElement('span');
        contentToAdd = document.createTextNode('$' + Math.trunc(dataBase[i].price) + ',');
        priceSpan.appendChild(contentToAdd); //agrego al span la parte entera

        let tagBr = document.createElement('br');

        let tagSup = document.createElement('sup');
        contentToAdd = document.createTextNode(decimal(dataBase[i].price));
        tagSup.appendChild(contentToAdd); //agrego parte decimnal al <sup>
        priceSpan.appendChild(tagSup); //agrego al span la parte <sup>

        textDiv.appendChild(nameSpan);
        textDiv.appendChild(tagBr);
        textDiv.appendChild(priceSpan);
        productDiv.appendChild(textDiv);
//tercer bloque - boton
        let button = document.createElement('button');
        button.setAttribute('id', dataBase[i].id);
        button.setAttribute('class', 'btn_addToCart');
        button.setAttribute('onclick', 'agregarAlCarrito("'+dataBase[i].id+'"); crearJson("'+dataBase[i].id+'");');

        let buttonTexto = document.createElement('span');
        buttonTexto.setAttribute('class', 'btn_content');
        contentToAdd = document.createTextNode('Añadir al carrito');
        buttonTexto.appendChild(contentToAdd);

        let buttonIcon = document.createElement('span');
        buttonIcon.setAttribute('class', 'btn_icon');

        let icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-long-arrow-alt-right');
        buttonIcon.appendChild(icon); //agrego icon al padre

        button.appendChild(buttonTexto);
        button.appendChild(buttonIcon);
        productDiv.appendChild(button);

        refLocation.appendChild(productDiv);
    }
}



function decimal(numero){
    let numToString = numero.toString();
    let array = numToString.split('.');
    return array[1];
}
/*
function createIdButton(numero){
    return 'producto-' + (numero + 1).toString(); 
}

function searchId(id){
    let i = 0;
    while (id =! dataBase[i].id){
        i += 1;
    }
    return i;
}*/

