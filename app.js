const reglas = { "a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};//Las letras son los indices de un arreglo que contiene las palabras por las que hay que reemplazar el texto

function encriptarTexto() {
    let textoIngresado = document.getElementById("entradaTexto").value /* Recibo el objeto TEXTAREA */
    if (validarTexto(textoIngresado)) { /* Sólo ingresa si el texto pasa la validación */
        let textoEncriptado = encriptar(textoIngresado); /* Si el texto pasa la validación, toca encriptarlo */
        document.getElementById("resultado").value = textoEncriptado; /* Escribo el texto encriptado en el textarea vacío */ 
    } 

}

function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas"); /*Verifico si el texto tiene caracteres prohibidos*/ 
        return false; 
    }else if(texto==vacio){
       alert("No hay texto para procesar"); /*Verifico si hay algún texto para procesar*/ 
        return false;
   }else {
        return true; /*Si está todo correcto, devuelvo VERDADERO para la validación*/ 
    }
}

function encriptar (textoIngresado) {  /*Función para encriptar el texto...*/ 
    let textoEncriptado = "";
    for (const obj in reglas) {
        textoEncriptado = textoIngresado.replaceAll(obj,reglas[obj]); //Reemplaza cada indice (las letras) por su contenido
        textoIngresado = textoEncriptado;        
    }
    return (textoEncriptado);
}

function desencriptarTexto() {
    let textoIngresado = document.getElementById("entradaTexto").value /* Recibo el objeto TEXTAREA */
    if (validarTexto(textoIngresado)) { /* Igualmente debo validar el texto encriptado que se ingresa */
        let textoDesencriptado = desencriptar(textoIngresado); /* Si el texto pasa la validación, toca encriptarlo */
        document.getElementById("resultado").value = textoDesencriptado; /* Escribo el texto encriptado en el textarea vacío */ 
        console.log(textoDesencriptado);
    } 
}

function desencriptar (textoEncriptado) {
    let textoOriginal = "";
    for (const obj in reglas) {
        textoOriginal = textoEncriptado.replaceAll(reglas[obj],obj); //Reemplaza cada contenido por el indice (las letras) 
        textoEncriptado = textoOriginal;        
    }
    return (textoOriginal); //Devuelvo el texto original) 
}

function copiarTexto() {
    let textoCopiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(textoCopiado);
    document.querySelector("#resultado").value="";
    alert("Elemento copiado al portapapeles");
}















