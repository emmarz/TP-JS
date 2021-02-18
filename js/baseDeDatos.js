let baseDeDatos = [
    {
        id: 1,
        nombre: 'Cómoda California 6 cajones',
        precio: 45579.99,
        URL: 'imagen/productos grilla/Comoda-california-6-cajones.jpg',
    },
    {
        id: 2,
        nombre: 'Cómoda California 8 cajones',
        precio: 63999.99,
        URL: 'imagen/productos grilla/Comoda-california-8-cajones.jpg',
    },
    {
        id: 3,
        nombre: 'Cómoda Chicago 4 cajones',
        precio: 22999.99,
        URL: 'imagen/productos grilla/comoda-chicago-4-cajones.jpg',
    },
    {
        id: 4,
        nombre: 'Escritorio Helsinki',
        precio: 65999.99,
        URL: 'imagen/productos grilla/escritorio-helsinki.jpg',
    },
    {
        id: 5,
        nombre: 'Escritorio Mika',
        precio: 61999.99,
        URL: 'imagen/productos grilla/escritorio-mika.jpg',
    },
    {
        id: 6,
        nombre: 'Estantería Eyra',
        precio: 44999.99,
        URL: 'imagen/productos grilla/estanteria-eyra.jpg',
    },
    {
        id: 7,
        nombre: 'Estantería Luca',
        precio: 24999.99,
        URL: 'imagen/productos grilla/estanteria-luca.jpg',
    },
    {
        id: 8,
        nombre: 'Estantería Nórdica',
        precio: 52999.99,
        URL: 'imagen/productos grilla/estanteria-nordica.jpg',
    },
    {
        id: 9,
        nombre: 'Juego mesa Nórdica',
        precio: 68999.99,
        URL: 'imagen/productos grilla/juego-mesa-nordica.jpg',
    },
    {
        id: 10,
        nombre: 'Mesa baja Nórdica',
        precio: 32999.99,
        URL: 'imagen/productos grilla/mesa-baja-nordica.png',
    },
    {
        id: 11,
        nombre: 'Mesa TV California',
        precio: 44999.99,
        URL: 'imagen/productos grilla/mesa-tv-california.jpg',
    },
    {
        id: 12,
        nombre: 'Mesa TV Nórdica',
        precio: 46999.99,
        URL: 'imagen/productos grilla/mesa-tv-nordica.jpg',
    },
    {
        id: 13,
        nombre: 'Mesa TV San Francisco',
        precio: 51999.99,
        URL: 'imagen/productos grilla/mesa-tv-san-francisco.jpg',
    },
    {
        id: 14,
        nombre: 'Ropero Nórdico Estocolmo',
        precio: 75999.99,
        URL: 'imagen/productos grilla/ropero-nordico-estocolmo.jpg',
    },
    {
        id: 15,
        nombre: 'Ropero Nórdico Narvik',
        precio: 72999.99,
        URL: 'imagen/productos grilla/ropero-nordico-narvik.jpg',
    }
]

function cargaDatos() {
    let i;
    let tamanio = baseDeDatos.length;
    let contenidoAgregar;
    for(i = 0; i < tamanio; i++){
        let ref_ubicacion = document.getElementById('main-productos');
        let productoDiv = document.createElement('div');
        productoDiv.setAttribute('id', baseDeDatos[i].id);
        productoDiv.setAttribute('class', 'col-12 col-sm-6 col-md-4 p-0 mx-2 producto');
//primer bloque - imagen
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'text-center');

        let img = document.createElement('img');
        img.setAttribute('src', baseDeDatos[i].URL);
        img.setAttribute('alt', baseDeDatos[i].nombre);
        imgDiv.appendChild(img);
        productoDiv.appendChild(imgDiv);
//segundo bloque - texto
        let textoDiv = document.createElement('div');
        textoDiv.setAttribute('class', 'text-center producto_texto')

        let nombreSpan = document.createElement('span');
        contenidoAgregar = document.createTextNode(baseDeDatos[i].nombre);
        nombreSpan.appendChild(contenidoAgregar);

        let precioSpan = document.createElement('span');
        contenidoAgregar = document.createTextNode('$' + Math.trunc(baseDeDatos[i].precio) + ',');
        precioSpan.appendChild(contenidoAgregar); //agrego al span la parte entera

        let tagBr = document.createElement('br');

        let tagSup = document.createElement('sup');
        contenidoAgregar = document.createTextNode(parteDecimal(baseDeDatos[i].precio));
        tagSup.appendChild(contenidoAgregar); //agrego parte decimnal al <sup>
        precioSpan.appendChild(tagSup); //agrego al span la parte <sup>

        textoDiv.appendChild(nombreSpan);
        textoDiv.appendChild(tagBr);
        textoDiv.appendChild(precioSpan);
        productoDiv.appendChild(textoDiv);
//tercer bloque - boton
        let button = document.createElement('button');
        button.setAttribute('class', 'button_agregarCarrito')

        let buttonTexto = document.createElement('span');
        buttonTexto.setAttribute('class', 'button_content');
        contenidoAgregar = document.createTextNode('Añadir al carrito');
        buttonTexto.appendChild(contenidoAgregar);

        let buttonIcon = document.createElement('span');
        buttonIcon.setAttribute('class', 'button_icon');

        let icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-long-arrow-alt-right');
        buttonIcon.appendChild(icon); //agrego icon al padre

        button.appendChild(buttonTexto);
        button.appendChild(buttonIcon);
        productoDiv.appendChild(button);

        ref_ubicacion.appendChild(productoDiv);
    }
}

function parteDecimal(numero){
    let numToString = numero.toString();
    let array = numToString.split('.');
    return array[1];
}


//llamadas
cargaDatos();