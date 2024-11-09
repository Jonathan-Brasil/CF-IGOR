function calculaMedia(valor1, valor2){
    const media = (valor1 + valor2) / 2
    return alert(media)
}

function verificaMaiorIdade(idade){

    if(Idade >= 18){
        return alert("Maior de idade")
    }else{
        return alert ("Menor de idade")
    }
}

function alteraBackGround(){
    const body = document.querySelector("body")
    body.style.backgroundColor = "red"
}