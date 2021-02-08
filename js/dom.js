document.write('hola gente!');

console.log(document.getElementById('principal'));
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('p')[1]);
console.log(document.getElementsByClassName('lorem'));
console.log(document.getElementsByClassName('lorem')[1]);
let otroValor = document.getElementById('principal').innerHTML;
console.log(otroValor);

let valor = document.getElementById('principal');
valor.innerHTML = 'esto es una prueba';