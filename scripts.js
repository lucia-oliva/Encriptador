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
        console.log("Escribe en minusculas y sin acentos y sin caracteres especiales");
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
        console.log('Ingresa texto');
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
        console.log('Mensaje vacio, ingresa texto.');
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