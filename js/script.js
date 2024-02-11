let menuVisible = false;

// Función para mostrar y ocultar el menu
function mostrarOcultaMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función para ocultar el menu cuando se hace click en un enlace
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para la animación de las barras de skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("c");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("equipo");
        habilidades[6].classList.add("adaptabilidad");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("responsabilidad");
        habilidades[9].classList.add("comunicacion");
    }
}

// Detecta el scroll para aplicar la animación
window.onscroll = function(){
    efectoHabilidades();
}

// Función para descargar el CV
function descargarCV(){
    var url = 'docs/Manuel_Vico_Arboledas_CV.pdf';
    var link = document.createElement('a');

    link.href = url;
    link.download = 'Manuel_Vico_Arboledas_CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Función para abrir enlaces en una nueva pestaña
function abrirEnlace(url){
    window.open(url, '_blank');
}