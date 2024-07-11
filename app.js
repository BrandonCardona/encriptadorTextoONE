mensaje = '';
document.getElementById('imgMensaje1').innerText = 'Ningún mensaje fue encontrado';
document.getElementById('imgMensaje2').innerText = 'Ingresa el texto que desees encriptar o desencriptar.';

function seleccionarMensaje(){
    return document.getElementById('mensaje').value;
}

function limpiarMensaje(){
    document.getElementById('mensaje').value = '';
    document.getElementById('imgMensaje1').innerText = '';
    document.getElementById('imgMensaje2').innerText = '';
    document.getElementById('imgResultado').width  = 0;
}

function encriptarMensaje(){
    const condicion = /^[a-z ¿?¡!,.-]+$/;
    mensaje = seleccionarMensaje();
    
    if(condicion.test(mensaje)){
        let mensajeSeparado = mensaje.split('');
        let mensajeEncriptado = '';

        mensajeSeparado.forEach((letra, index) => {
            
            if(letra == 'a'){
                mensajeEncriptado = mensajeEncriptado + 'ai';
            }else if(letra == 'e'){
                mensajeEncriptado = mensajeEncriptado + 'enter';
            }else if(letra == 'i'){
                mensajeEncriptado = mensajeEncriptado + 'imes';
            }else if(letra == 'o'){
                mensajeEncriptado = mensajeEncriptado + 'ober';
            }else if(letra == 'u'){
                mensajeEncriptado = mensajeEncriptado + 'ufat';
            }else{
                mensajeEncriptado = mensajeEncriptado + letra;
            }
        });

        limpiarMensaje();
        let resultado = document.getElementById('mensajeResultado');
        resultado.innerHTML = mensajeEncriptado;
        modificarSeccionResultado(resultado);
        generarBotonCopiar();
    }else{
        console.log("La cadena contiene mayusculas, numeros o caractares especiales")
    }
}


function desencriptarMensaje(){
    const condicion = /^[a-z ¿?¡!,.-]+$/;
    mensaje = seleccionarMensaje();
    
    if(condicion.test(mensaje)){

        let mensajeDesencriptado = '';
        let patronEncriptacion = /(ai|enter|imes|ober|ufat)/g;
        let mensajeSeparado = mensaje.split(patronEncriptacion);
        mensajeSeparado = mensajeSeparado.filter(item => item !== '');

        mensajeSeparado.forEach((letra, index)=>{
            if(letra == 'ai'){
                mensajeDesencriptado = mensajeDesencriptado + 'a';
            }else if(letra == 'enter'){
                mensajeDesencriptado = mensajeDesencriptado + 'e';
            }else if(letra == 'imes'){
                mensajeDesencriptado = mensajeDesencriptado + 'i';
            }else if(letra == 'ober'){
                mensajeDesencriptado = mensajeDesencriptado + 'o';
            }else if(letra == 'ufat'){
                mensajeDesencriptado = mensajeDesencriptado + 'u';
            }else{
                mensajeDesencriptado = mensajeDesencriptado + letra;
            }
        });

        limpiarMensaje();
        let resultado = document.getElementById('mensajeResultado');
        resultado.innerHTML = mensajeDesencriptado;
        modificarSeccionResultado(resultado);
        generarBotonCopiar();
    }else{
        console.log("La cadena contiene mayusculas, numeros o caractares especiales")
    }
}


function modificarSeccionResultado(resultado){
    let seccionResultado = document.getElementById('seccionResultado');
    let botonCopiar = document.getElementById('btnCopiar');

    seccionResultado.style.justifyContent = 'space-between';
    seccionResultado.style.paddingTop = '2rem';
    resultado.style.marginBottom = 'auto';
    resultado.style.marginTop = '0';
    resultado.style.paddingTop = '0';
    botonCopiar.style.margin = '1rem auto 0 auto';
}


function generarBotonCopiar(){
    let botonCopiar = document.getElementById('btnCopiar');
    botonCopiar.classList.add('copiarTexto');
    botonCopiar.innerHTML = 'Copiar';

}

function copiarTexto(){

    event.preventDefault();

    let resultado = document.getElementById('mensajeResultado');
    let mensaje = resultado.textContent;
    navigator.clipboard.writeText(mensaje).then(function() {
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
}