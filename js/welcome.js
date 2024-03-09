//Alertas Iniciales:
alert("Bienvenido/a a Brayanne's Quest: En búsqueda del nombre perdido.");

alert("¡Eres muy valiente al venir aquí! Por favor, preséntate a ti mismo a continuación:");

//Prompts de mini presentacion inicial:
let saludoInicial = prompt("¿Cómo te llamas?");

alert("Bienvenido/a " + saludoInicial + "! A continuación vamos a crear tu personaje para esta nueva aventura!");

let nickName = prompt("¡Elije un Nick para tu personaje!");
function maquinaDeEscribir(mensaje, elementoID) {
    for (let i = 0; i < mensaje.length; i++) {
        setTimeout(function() {
            document.getElementById(elementoID).innerHTML += mensaje.charAt(i);
        }, i * 90);
    }
}

//Elegir Raza y Clase.
let personaje = {
    1: "Elfo",
    2: "Enano",
    3: "Humano",
    4: "Orco",
};

let raza;
do {
    raza = prompt("Elige una Raza:\n1:🧝Elfos: Son conocidos por su gracia y conexión con la naturaleza.\n2:🧔🏾Enanos: Son famosos por su resistencia y habilidades de artesanía.\n3:🦸🏻‍♂️Humanos: Son versátiles y ambiciosos, con una gran diversidad de habilidades.\n4:🧟‍♀️Orcos: Son conocidos por su fuerza bruta y su ferocidad en el combate.");
    if (!personaje[raza]) {
        alert("Vuelva a intentar con números del 1 al 4.");
    }
} while (!personaje[raza]);

alert(`Ahora perteneces al mundo del ${personaje[raza]}. ¡Buena elección ` + nickName + "!");

maquinaDeEscribir(saludoInicial, "userName");
maquinaDeEscribir(nickName, "nick");
maquinaDeEscribir(personaje[raza], "personaje"); 

//Clases de Personaje
let clases = {
    "Elfo": {
        1: "Mago",
        2: "Druidas",
        3: "Bardos"
    },
    "Enano": {
        1: "Guerreros",
        2: "Herreros",
        3: "Paladines"
    },
    "Humano": {
        1: "Caballeros",
        2: "Pícaros",
        3: "Clerigos"
    },
    "Orco": {
        1: "Berserkers",
        2: "Chamanes",
        3: "Cazadores"
    }
};

alert("Es momento de elegir la clase que definirá tu estilo por completo!");

let clase;
do {
    clase = prompt(`Elige una Clase:\n1: ${clases[personaje[raza]][1]}\n2: ${clases[personaje[raza]][2]}\n3: ${clases[personaje[raza]][3]}`);
    if (!clases[personaje[raza]][clase]) {
        alert("Vuelva a intentar con números del 1 al 3.");
    }
} while (!clases[personaje[raza]][clase]);

alert(`Has elegido ser un/a ${clases[personaje[raza]][clase]}! ¡Buena elección ` + nickName + "!");

maquinaDeEscribir(clases[personaje[raza]][clase], "clase");

// Elfos: 
// Mago: Usuarios de magia poderosa y destructiva.
// Druidas: Capaces de manipular la magia de la naturaleza.
// Bardos: Artistas talentosos con habilidades mágicas únicas.

// Enanos: 
// Guerreros: Combatientes fuertes y resistentes.
// Herreros: Maestros de la creación y mejora de armas y armaduras.
// Paladines: Defensores valientes con habilidades de curación.

// Humanos: 
// Caballeros: Protectores leales con una gran habilidad en el combate cuerpo a cuerpo.
// Pícaros: Maestros del sigilo y la astucia, expertos en trampas y robos.
// Clerigos: Sanadores y protectores con habilidades mágicas divinas.

// Orcos: 
// Berserkers: Combatientes salvajes que entran en frenesí en la batalla.
// Chamanes: Conectados con los espíritus y capaces de usar magia elemental.
// Cazadores: Expertos en rastreo y combate a distancia.

