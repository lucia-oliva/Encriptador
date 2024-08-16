//limpiar textarea.
const textarea = document.getElementById('input-text');
const instruccion = document.getElementById('instruccion');

textarea.addEventListener('input', () =>{
    if(textarea.value.trim() === ''){
        instruccion.classList.remove('hidden');
        mostrarContenido('');
        limpiarOutput(); 
    }else{
        instruccion.classList.add('hidden');
        limpiarOutput(); 
    }
    
});

//limpiar cuadro output
const mensaje = document.getElementById('contenido');
const espacioOutput = document.getElementById('espacio-output');

function limpiarOutput(){
    if(mensaje.textContent.trim()=== ''){
        espacioOutput.classList.remove('hidden');
    }else{
        espacioOutput.classList.add('hidden');
    }
}


//limitar a solo minusculas y sin acentos
function esTextovalido(texto){
    if(/^[a-z\s]+$/.test(texto)){
        return true;
    }else{
        mostrarAlerta('Solo se admite minusculas y espacios')
        return false;
    }
}


//funcion encriptar

const button_encriptar = document.getElementById('encriptar_btn');
button_encriptar.addEventListener('click', function(){
    const resultado = encriptar();
    if(resultado){
        mostrarContenido(resultado);
        limpiarOutput();
    }
});



function encriptar(){
    const textarea = document.getElementById('input-text');
    const texto = textarea.value;

    if(texto.trim() === ''){
        mostrarAlerta('Ingrese un texto para encriptar');
        return;
    }else if( texto.trim() !== '' && esTextovalido(texto.trim())){
        let mensaje = '';
        for(let i=0; i<texto.length; i++){
            let caracter = texto[i];

            switch(caracter){
                case 'a':
                    mensaje += 'ai'
                    break;
                case 'e':
                    mensaje += 'enter'
                    break;
                case 'i':
                    mensaje += 'imes'
                    break;
                case 'o':
                    mensaje += 'ober'
                    break;
                case 'u':
                    mensaje += 'ufat'
                    break;
                default:
                    mensaje += caracter;
                    break;
            }

        }

        return mensaje;
    }
}


//funcion desencriptar

const button_desencriptar = document.getElementById('desencriptar_btn');
button_desencriptar.addEventListener('click', function(){
    const resultado = desencriptar();
    if(resultado){
        mostrarContenido(resultado);
        limpiarOutput();
    }
 
});



function desencriptar(){
    const textarea = document.getElementById('input-text');
    const texto = textarea.value;
    if(texto.trim() === ''){
        mostrarAlerta('Ingrese un texto para desencriptar');
        return;
    }else if( texto.trim() !== '' && esTextovalido(texto.trim())){
        let mensaje = texto;
        
        mensaje = mensaje.replace(/ai/g, 'a');
        mensaje = mensaje.replace(/enter/g, 'e');
        mensaje = mensaje.replace(/imes/g, 'i');
        mensaje = mensaje.replace(/ober/g, 'o');
        mensaje = mensaje.replace(/ufat/g, 'u');
        

        return mensaje;
    }

}

//mostrar texto en pantalla

 function mostrarContenido(mensaje) { 
    const mostrarMensaje = document.getElementById('contenido');
    mostrarMensaje.textContent = mensaje;
    limpiarOutput();
 }

//gestion de alertas

//mostrar alerta

function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.alert');
    alerta.textContent = mensaje;
    alerta.classList.remove('hidden');
    alerta.classList.add('show');
    //ocultar alerta
    setTimeout(() => ocultarAlerta(), 3000);
}

function ocultarAlerta(){
    const alerta = document.querySelector('.alert');
    alerta.classList.remove('show');
    alerta.classList.add('hidden');
}


 // Función para copiar al portapapeles
 async function copiarAlPortapapeles() {
    const texto = document.getElementById('contenido').innerText; 
    try {
        if(texto.trim() == '') {
            mostrarAlerta('No hay ningún texto para seleccionar');
            return;  // salir del método si no hay texto a copiar
        }else{
        await navigator.clipboard.writeText(texto); 
        mostrarAlerta('Texto copiado al portapapeles'); 
        } 
    } catch (err) {
        console.error('Error al copiar el texto:', err); 
        mostrarAlerta('Error al copiar el texto'); 
    }
}

  // Añadir el evento click al botón
const button_copy = document.getElementById('copiar_btn');
button_copy.addEventListener('click', copiarAlPortapapeles);

//funcion cambiar de modo 

function changeMode(){
 const modo = document.getElementById('modo');
 var github = document.getElementById('github');
 var alura = document.getElementById('alura-icon');
 var linkedin = document.getElementById('linkedin icon');
 var lock = document.getElementById('lock');
 var unlock = document.getElementById('unlock');
 var copy = document.getElementById('copy');
 var root = document.documentElement;
 const shadowButton = document.querySelectorAll('button');
 if(modo.getAttribute("src") == "src/img/moon-ligth.svg"){
    //change icons dark mode
    modo.setAttribute("src", "src/img/sun-dark.svg");
    github.setAttribute("src", "src/img/github-dark.svg");
    alura.setAttribute("src", "src/img/alura-icon-dark.svg");
    linkedin.setAttribute("src", "src/img/linkedin-dark.svg");
    lock.setAttribute("src", "src/img/lock-dark.svg");
    unlock.setAttribute("src", "src/img/unlock-dark.svg");
    copy.setAttribute("src", "src/img/copy-dark.svg");
    //change colors dark mode
    root.style.setProperty('--first-color', '#8c426d');
    root.style.setProperty('--second-color', '#2c1f26');
    root.style.setProperty('--third-color', '#fff0f6');
    root.style.setProperty('--fourth-color', '#fff0f6');
    root.style.setProperty('--fifth-color', '#2c1f26');
    root.style.setProperty('--hover-color', '#b94589');
    root.style.setProperty('--shadow-color', "rgba(11, 7, 9, 0.4)");
    shadowButton.forEach(boton =>{
        boton.style.boxShadow ='0rem 0.06rem 0rem 0rem var(--fourth-color)';
    });
 }else if(modo.getAttribute("src") == "src/img/sun-dark.svg"){
     //change icons ligth mode
     modo.setAttribute("src", "src/img/moon-ligth.svg");
     github.setAttribute("src", "src/img/github-ligth.svg");
     alura.setAttribute("src", "src/img/alura-icon-ligth.svg");
     linkedin.setAttribute("src", "src/img/linkedin-ligth.svg");
     lock.setAttribute("src", "src/img/lock-ligth.svg");
     unlock.setAttribute("src", "src/img/unlock-ligth.svg");
     copy.setAttribute("src", "src/img/copy-ligth.svg");
     //change colors ligth mode
     root.style.setProperty('--first-color', '#ff9ecd');
     root.style.setProperty('--second-color', '#fff0f6');
     root.style.setProperty('--third-color', '#34113f');
     root.style.setProperty('--fourth-color', '#8c426d');
     root.style.setProperty('--fifth-color', '#2c1f26');
     root.style.setProperty('--hover-color', '#f074b0');
     root.style.setProperty('--shadow-color', "rgb(44, 31, 38 ,0.4)");
     shadowButton.forEach(boton =>{
        boton.style.boxShadow ='0rem 0.07rem 0rem 0rem var(--fourth-color)';
        });

    }
}

//setear funcion cambiar de color a un boton

const button_mode = document.getElementById('mode_btn');
button_mode.addEventListener('click', changeMode);
