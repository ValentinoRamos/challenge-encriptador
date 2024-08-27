function encriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
   

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufar");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito"
        parrafo.textContent = "";
        muñeco.src = "./imagenes/encriptado.jpg";
    } else {
        muñeco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue otorgado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufar/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito"
        parrafo.textContent = "";
        muñeco.src = "./imagenes/desencriptado.png";
    
}   else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue otorgado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
}

}

function fCopiar() {
    let textcopiar = document.getElementById("texto");
    textcopiar.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");

}
