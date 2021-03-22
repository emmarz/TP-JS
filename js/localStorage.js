class Persona {
    constructor(name, apellido, edad){
    this.name = name;
    this.apellido = apellido;
    this.edad = edad;
    }
    saludar(Persona){
        alert('Bienvenido!!!' + Persona.name)
    }
}

let unaPersona = new Persona(
    prompt('name'),
    prompt('apellido'),
    parseInt(prompt('edad'))
);

saludar(unaPersona);

//manejando variable objeto
localStorage.setItem('otraPersona', JSON.stringify(unaPersona));
console.log('Mi persona obtenida: ', JSON.parse(localStorage.otraPersona));

localStorage.setItem('namePersona', unaPersona.name);
console.log(localStorage.getItem('namePersona'));



//manejando variable dato
localStorage.setItem('animal', prompt('Ingrese tipo animal'));
console.log(localStorage.animal);
console.log(localStorage.getItem('animal'));
console.log(localStorage.raza = prompt('Ingrese raza'));

var autoJON = {
    "marca": "ford",
    "anio": 2020,
    "color": "rojo",
    "precio" : 12000000
};

console.log(autoJON);
console.log(autoJON.anio);
localStorage.setItem('miAuto', JSON.stringify(autoJON));
console.log(localStorage.getItem('miAuto'));






