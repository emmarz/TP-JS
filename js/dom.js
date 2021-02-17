/*document.write('hola gente!');

console.log(document.getElementById('principal'));
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('p')[1]);
console.log(document.getElementsByClassName('lorem'));
console.log(document.getElementsByClassName('lorem')[1]);
let otroValor = document.getElementById('principal').innerHTML;
console.log(otroValor);

let valor = document.getElementById('principal');
valor.innerHTML = 'esto es una prueba';

*/
let parrafo1 = document.createElement('p');
let contenido = document.createTextNode('creo un parrafo');
parrafo1.appendChild(contenido);
document.body.appendChild(parrafo1);



console.log(document.getElementsByClassName('cuadro'));
//console.log(parrafo[0].innerHTML);
let miElemento = document.createElement('span');
contenido = document.createTextNode('Agrego parrafo al bloque');


miElemento.appendChild(contenido);
document.getElementsByClassName('cuadro')[0].appendChild(miElemento);

document.getElementsByClassName('lorem')[0].addEventListener('click', apareceContenido());

function apareceContenido(){
    
}


