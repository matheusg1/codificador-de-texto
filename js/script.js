var textoEntrada = document.getElementById("textoEntrada")
var textoResultado = document.getElementById("textoResultado")
var btnCodificar = document.getElementById("botaoCodificar")
var btnDecodificar = document.getElementById("botaoDecodificar")
var btnCopiar = document.getElementById("botaoCopiar");

function codificaLetras(frase){
    frase = frase.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
    return frase
}

function decodificaLetras(frase){
    frase = frase.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
    return frase
}

btnCodificar.addEventListener("click", function(event){
    if (textoEntrada.value){
        textoEntrada.value = codificaLetras(textoEntrada.value)
        console.log(textoEntrada.value)
        textoResultado.value = textoEntrada.value
        textoEntrada.value = ""
    }
})

btnDecodificar.addEventListener("click", function(event){
    if (textoEntrada.value){
        textoEntrada.value = decodificaLetras(textoEntrada.value)
        console.log(textoEntrada.value)
        textoResultado.value = textoEntrada.value
        textoEntrada.value = ""
        }
    })

btnCopiar.addEventListener("click", function(event){
    if (textoResultado.value){
        textoResultado.select()
        textoResultado.setSelectionRange(0, 99999)
        document.execCommand('copy')
        alert("Texto copiado com sucesso: " + (textoResultado.value))
    }
})