const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".botonCopiar")

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopiar.style.display = "inherit";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "emter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar() {
    const textoEncriptado = Desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    botonCopiar.style.display = "inherit";
    mensaje.style.backgroundImage = "none";
}

function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "emter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto(texto) {
    const textoCopiado = (mensaje.value)
    textArea.value = textoCopiado
    mensaje.value = "";
    textArea.focus();
    mensaje.style.backgroundImage = "";
    botonCopiar.style.display = "none";
    return texto
}
