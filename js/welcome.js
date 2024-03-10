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

alert(`Ahora perteneces al mundo del ${personaje[raza]}. ¡Buena elección ` + saludoInicial + "!");

maquinaDeEscribir(saludoInicial, "userName");
maquinaDeEscribir(nickName, "nick");
maquinaDeEscribir(personaje[raza], "personaje"); 

//Clases de Personaje
let clases = {
    "Elfo": {
        1: "🧙‍♂️Mago", 
        2: "🌿Druida",
        3: "🎵Bardo"
    },
    "Enano": {
        1: "⚔️Guerrero",
        2: "🔨Herrero",
        3: "🛡️Paladin"
    },
    "Humano": {
        1: "🏇Caballero",
        2: "🗡️Pícaro",
        3: "✨Clerigo"
    },
    "Orco": {
        1: "🪓Berserker",
        2: "🔮Chaman",
        3: "🏹Cazador"
    }
};

// Descripciones de las clases para cada raza
let descripcionesClases = {
    "Elfo": {
        1: "Usuarios de magia poderosa y destructiva.",
        2: "Capaces de manipular la magia de la naturaleza.",
        3: "Artistas talentosos con habilidades mágicas únicas."
    },
    "Enano": {
        1: "Combatientes fuertes y resistentes.",
        2: "Maestros de la creación y mejora de armas y armaduras.",
        3: "Defensores valientes con habilidades de curación."
    },
    "Humano": {
        1: "Protectores leales con una gran habilidad en el combate cuerpo a cuerpo.",
        2: "Maestros del sigilo y la astucia, expertos en trampas y robos.",
        3: "Sanadores y protectores con habilidades mágicas divinas."
    },
    "Orco": {
        1: "Combatientes salvajes que entran en frenesí en la batalla.",
        2: "Conectados con los espíritus y capaces de usar magia elemental.",
        3: "Expertos en rastreo y combate a distancia."
    }
};

alert("Es momento de elegir la clase que definirá tu estilo por completo!");

let clase;
do {
    clase = prompt(`Elige una Clase:\n1: ${clases[personaje[raza]][1]}: ${descripcionesClases[personaje[raza]][1]}\n2: ${clases[personaje[raza]][2]}: ${descripcionesClases[personaje[raza]][2]}\n3: ${clases[personaje[raza]][3]}: ${descripcionesClases[personaje[raza]][3]}`);
    if (!clases[personaje[raza]][clase]) {
        alert("Vuelva a intentar con números del 1 al 3.");
    }
} while (!clases[personaje[raza]][clase]);

alert(`Ahora eres un ${clases[personaje[raza]][clase]}! ¡Buena elección ` + saludoInicial + "!");

maquinaDeEscribir(clases[personaje[raza]][clase], "clase");

let atributosBase = {
    "🧙‍♂️Magos": {
        "Inteligencia": 8,
        "Fuerza": 1,
        "Agilidad": 5,
    },
    "🌿Druida": {
        "Inteligencia": 6,
        "Fuerza": 2,
        "Agilidad": 6,
    },
    "🎵Bardo": {
        "Inteligencia": 10,
        "Fuerza": 1,
        "Agilidad": 7,
    },
    "⚔️Guerrero": {
        "Inteligencia": 5,
        "Fuerza": 15,
        "Agilidad": 5,
    },
    "🔨Herrero": {
        "Inteligencia": 3,
        "Fuerza": 18,
        "Agilidad": 3,
    },
    "🛡️Paladin": {
        "Inteligencia": 8,
        "Fuerza": 12,
        "Agilidad": 5,
    },
    "🏇Caballero": {
        "Inteligencia": 2,
        "Fuerza": 20,
        "Agilidad": 4,
    },
    "🗡️Pícaro": {
        "Inteligencia": 6,
        "Fuerza": 7,
        "Agilidad": 12,
    },
    "✨Clerigo": {
        "Inteligencia": 8,
        "Fuerza": 10,
        "Agilidad": 5,
    },
    "🪓Berserker": {
        "Inteligencia": 1,
        "Fuerza": 25,
        "Agilidad": 3,
    },
    "🔮Chaman": {
        "Inteligencia": 10,
        "Fuerza": 8,
        "Agilidad": 5,
    },
    "🏹Cazador": {
        "Inteligencia": 8,
        "Fuerza": 10,
        "Agilidad": 10,
    },
}

let atributoClase = atributosBase[clases[personaje[raza]][clase]];

alert("Ok, " + saludoInicial + "!\nEste es tu personaje:\nSu nombre es " + nickName + " y es un " + clases[personaje[raza]][clase] + " - " + personaje[raza] + ";\nEstos son sus atributos base:\n🧠Inteligencia: " + atributoClase["Inteligencia"] + "\n💪Fuerza: " + atributoClase["Fuerza"] + "\n🤸🏻‍♀️Agilidad: " + atributoClase["Agilidad"]);

maquinaDeEscribir(atributoClase["Inteligencia"].toString(), "Inteligencia");
maquinaDeEscribir(atributoClase["Fuerza"].toString(), "Fuerza");
maquinaDeEscribir(atributoClase["Agilidad"].toString(), "Agilidad");






















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

