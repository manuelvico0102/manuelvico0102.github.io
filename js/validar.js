var nombre = document.getElementById("name");
var email = document.getElementById("email");
var asunto = document.getElementById("subject");
var mensaje = document.getElementById("message");

var errorName = document.getElementById("errorName");
var errorEmail = document.getElementById("errorEmail");
var errorSubject = document.getElementById("errorSubject");
var errorMessage = document. getElementById("errorMessage");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var form = document.getElementById("form");

form.addEventListener('submit', function(evt){
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorSubject.textContent = "";
    errorMessage.textContent = "";

    eliminarError();

    if (nombre.value == "" || nombre.value == null) {
        errorName.textContent = "Por favor, ingrese su nombre";
        errorName.classList.add("error");
        nombre.classList.add("error-input");
        evt.preventDefault();
    }

    if(!emailRegex.test(email.value)){
        errorEmail.textContent = "Por favor, ingrese un correo electrónico válido";
        errorEmail.classList.add("error");
        email.classList.add("error-input");
        evt.preventDefault();
    }

    if(asunto.value.trim() == ""){
        errorSubject.textContent = "Por favor, ingrese un asunto";
        errorSubject.classList.add("error");
        asunto.classList.add("error-input");
        evt.preventDefault();
    }

    if(mensaje.value.trim() == ""){
        errorMessage.textContent = "Por favor, ingrese un mensaje";
        errorMessage.classList.add("error");
        mensaje.classList.add("error-input");
        evt.preventDefault();
    } 
});

function eliminarError(){
    nombre.classList.remove("error-input");
    email.classList.remove("error-input");
    asunto.classList.remove("error-input");
    mensaje.classList.remove("error-input");
    errorName.classList.remove("error");
    errorEmail.classList.remove("error");
    errorSubject.classList.remove("error");
    errorMessage.classList.remove("error");
}