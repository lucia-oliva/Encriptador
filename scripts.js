//limpiar textarea.
const textarea = document.getElementById('input-text');
const instruccion = document.getElementById('instruccion');

textarea.addEventListener('input', () =>{
    if(textarea.value.trim() === ''){
        instruccion.classList.remove('hidden');
    }else{
        instruccion.classList.add('hidden');
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

limpiarOutput();

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
    console.log(encriptar());
});



function encriptar(){
    const textarea = document.getElementById('input-text');
    const texto = textarea.value;
    if(texto.trim() === ''){
        console.log('Ingresa texto');
        return;
    }else if( texto.trim() !== '' && esTextovalido(texto.trim())){
        let textoEncriptado = '';
        for(let i=0; i<texto.length; i++){
            let caracter = texto[i];

            switch(caracter){
                case 'a':
                    textoEncriptado += 'ai'
                    break;
                case 'e':
                    textoEncriptado += 'enter'
                    break;
                case 'i':
                    textoEncriptado += 'imes'
                    break;
                case 'o':
                    textoEncriptado += 'ober'
                    break;
                case 'u':
                    textoEncriptado += 'ufat'
                    break;
                default:
                    textoEncriptado += caracter;
                    break;
            }

        }

        return textoEncriptado;
    }

}

