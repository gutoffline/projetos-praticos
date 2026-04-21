function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value

    //document.getElementById("resposta").innerText = periodoSelecionado

    if(periodoSelecionado == "d"){
        document.getElementById("resposta").innerText = "Dia ☀️"
        document.body.style.backgroundColor = "#b4edff"
        document.body.style.color = "#1b1b1b"
        document.getElementById("foto").src="imagens/dia.gif"

    }else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = "Tarde 🌤️"
        document.body.style.backgroundColor = "#ffb412"
        document.body.style.color = "#001483"
        document.getElementById("foto").src="imagens/tarde.gif"
    }else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText = "Noite 🌙"
        document.body.style.backgroundColor = "#000744"
        document.body.style.color = "#fcfcfc"
        document.getElementById("foto").src="imagens/noite.gif"
    }else{
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#f9c9ff"
        document.body.style.color = "#3b3b3b"
        document.getElementById("foto").src="imagens/original.png"
    }

}