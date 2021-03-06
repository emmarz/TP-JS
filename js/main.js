let cart = {};
let templateItem = document.querySelector('#template-item');
let listItems = document.querySelector('#list-items');
let fragment = document.createDocumentFragment();
let cartModalFooter = document.querySelector('#cartModal-footer');

//Otenemos el div padre de cada producto en el DOM
$('#main-productos').click( e => {
    addToCart(e);
});

function addToCart(e) {
    let nodeTagButton;
    if (e.target.classList.contains('btn_addToCart')){
        nodeTagButton = e.target.parentElement;
        setCart(nodeTagButton);
    }else{
            if(e.target.classList.contains('btn_content') || e.target.classList.contains('btn_icon')){
                nodeTagButton = (e.target.parentElement).parentElement;
                setCart(nodeTagButton);
            }
            else{
                if(e.target.classList.contains('fas')){
                    nodeTagButton = ((e.target.parentElement).parentElement).parentElement;
                    setCart(nodeTagButton);
                }
            }
        }
    e.stopPropagation();
}
//Creamos objeto producto y lo agregamos al carrito
let setCart = anObject =>{
    let product = {
        id: anObject.querySelector('button').getAttribute('id'),
        name: anObject.querySelector('.product_name').textContent,
        price: anObject.querySelector('.product_price').textContent,
        url: anObject.querySelector('img').getAttribute('src'),
        count: 1,
    }
    if(cart.hasOwnProperty(product.id)){
        product.count = cart[product.id].count + 1;
    }
    cart[product.id] = {...product};
    displayCart();
}

let displayCart = () => {
    listItems.innerHTML = '';
    Object.values(cart).forEach( product => {
        templateItem.querySelector('img').setAttribute('src', product.url);
        templateItem.querySelector('img').setAttribute('alt', product.name);
        templateItem.querySelector('#item-name').textContent = product.name;
        templateItem.querySelector('.item-substract').dataset.id = product.id;
        templateItem.querySelector('.item-count').textContent = product.count;
        templateItem.querySelector('.item-add').dataset.id = product.id;
        templateItem.querySelector('#item-price').textContent = product.price * product.count;

        let clone = templateItem.cloneNode(true);
        fragment.appendChild(clone);
        });
    listItems.appendChild(fragment);
    displayFooter();
}

let displayFooter = () => {
    cartModalFooter.innerHTML = '';
    if(Object.keys(cart).length === 0){
        cartModalFooter.innerHTML = <p id="emptyCart">Carrito vacío</p>;
    }else{
        cartModalFooter.innerHTML =
        `<span id="count-total">total productos: </span>
        <span id="price-total">Precio total: </span>
        <button type="button" class="btn btn-secondary">Vaciar carrito</button>`;
    }
    let nCount = Object.values(cart).reduce((acc, {count}) => acc + count, 0);
    let nPrice = Object.values(cart).reduce((acc, {count, price}) => acc + cantidad * price, 0);
    cartModalFooter.querySelectorAll('span')[0].textContent += nCount;
    cartModalFooter.querySelectorAll('span')[1].textContent += nPrice;

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
        nameSpan.setAttribute('class', 'product_name');
        contentToAdd = document.createTextNode(dataBase[i].name);
        nameSpan.appendChild(contentToAdd);

        let priceSpan = document.createElement('span');
        priceSpan.setAttribute('class', 'product_price');
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
        //button.setAttribute('onclick', 'agregarAlCarrito("'+dataBase[i].id+'"); crearJson("'+dataBase[i].id+'");');

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

