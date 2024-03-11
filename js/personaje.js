// Recupera la información del almacenamiento local
let nombreUsuario = localStorage.getItem('nombreUsuario');
let nickPersonaje = localStorage.getItem('nickPersonaje');
let origen = localStorage.getItem('origen');
let genero = localStorage.getItem('genero');
let clase = localStorage.getItem('clase');
let inteligencia = localStorage.getItem('inteligencia');
let fuerza = localStorage.getItem('fuerza');
let agilidad = localStorage.getItem('agilidad');

// Mostrar la información en la página
//document.getElementById('nombreUsuario').textContent = nombreUsuario; <<<<<<-----   OCULTADO POR EL MOMENTO
document.getElementById('nickPersonaje').textContent = nickPersonaje;
document.getElementById('origen').textContent = origen;
document.getElementById('genero').textContent = genero;
document.getElementById('clase').textContent = clase;
document.getElementById('inteligencia').textContent = inteligencia;
document.getElementById('fuerza').textContent = fuerza;
document.getElementById('agilidad').textContent = agilidad;

    //borrar el personaje de manera local.
document.getElementById('borrarPersonaje').addEventListener('click', function() {
    
    let confirmar = confirm("Se perderá toda la información de su personaje, ¿Estás seguro que desea continuar?");

    if (confirmar) {
    
        localStorage.removeItem('nombreUsuario');
        localStorage.removeItem('nickPersonaje');
        localStorage.removeItem('origen');
        localStorage.removeItem('genero');
        localStorage.removeItem('clase');
        localStorage.removeItem('inteligencia');
        localStorage.removeItem('fuerza');
        localStorage.removeItem('agilidad');

        
        location.reload();
    }
});

//La siguiente sección es algo nuevo para mi, Utilizando almacenamiento local, descarga y carga de datos.
document.getElementById('descargarPersonaje').addEventListener('click', function() {
    // Creamos un objeto con la info del personaje guardada en el JS del index.
    let personaje = {
        nombreUsuario: localStorage.getItem('nombreUsuario'),
        nickPersonaje: localStorage.getItem('nickPersonaje'),
        origen: localStorage.getItem('origen'),
        genero: localStorage.getItem('genero'),
        clase: localStorage.getItem('clase'),
        inteligencia: localStorage.getItem('inteligencia'),
        fuerza: localStorage.getItem('fuerza'),
        agilidad: localStorage.getItem('agilidad')
    };

    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(personaje));

    // Descarga
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    /*NOTA: Abajo en el nombre del archivo podría agregar un ID por si tenemos 2 personajes iguales, de esa forma le asignamos ID diferentes al guardar, algo como "nick-elfo-mago-mujer-83855.json" */
    downloadAnchorNode.setAttribute("download", nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
});

//Carga de PJ
document.getElementById('cargarPersonaje').addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let personaje = JSON.parse(e.target.result);

                // Guarda la información del personaje en el almacenamiento local
                localStorage.setItem('nombreUsuario', personaje.nombreUsuario);
                localStorage.setItem('nickPersonaje', personaje.nickPersonaje);
                localStorage.setItem('origen', personaje.origen);
                localStorage.setItem('genero', personaje.genero);
                localStorage.setItem('clase', personaje.clase);
                localStorage.setItem('inteligencia', personaje.inteligencia);
                localStorage.setItem('fuerza', personaje.fuerza);
                localStorage.setItem('agilidad', personaje.agilidad);

                // Actualiza la página para reflejar que la información del personaje ha sido cargada
                location.reload();
            };
            reader.readAsText(file);
        }
    }
    input.click();
});

//Personalización del fondo del personaje
// Convierte la raza, clase y género a formato de nombre de archivo
let razaArchivo = origen.toLowerCase();
let claseArchivo = clase.replace(' ', '_');
let generoArchivo = genero === 'Hombre' ? 'Hombre' : 'Mujer';

// Crea el nombre del archivo
let nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;

// Asigna el fondo al div .info-personaje
document.querySelector('.info-personaje').style.backgroundImage = `url('../../img/cartas/${nombreArchivo}')`;