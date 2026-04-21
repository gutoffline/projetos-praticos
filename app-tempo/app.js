function fnCarregarDadosCep(cep){
    const url = "https://viacep.com.br/ws/" + cep + "/json/"

    fetch(url)
    .then(response => response.json())
    .then(function(data){
        
        let cidade = data.localidade
        let uf = data.uf
        document.getElementById("local").innerHTML = `${cidade}, ${uf} - Brasil`
        fnCarregarDadosTemperatura(cidade)
    })
    .catch(error => console.error(error))
}

function fnCarregarDadosTemperatura(cidade) {
    const url2 = "https://goweather.herokuapp.com/weather/" + cidade
    const url = "dados.json"
    console.log(url2)

    document.getElementById("formulario").style.display = "none"
    document.getElementById("conjunto-local").style.display = "block"
    //const url = "dados.json"

    fetch(url)
        .then(response => response.json())
        .then(function (data) {

            fnMudarTema(data.description)

            let temperatura = data.temperature.substring(1, data.temperature.length)
            document.getElementById("temperatura").innerHTML = temperatura
            

            fnDias()

            let temperaturaDia1 = data.forecast[0].temperature.substring(1, data.forecast[0].temperature.length)
            document.getElementById("temperatura-dia1").innerHTML = temperaturaDia1

            let temperaturaDia2 = data.forecast[1].temperature.substring(1, data.forecast[1].temperature.length)
            document.getElementById("temperatura-dia2").innerHTML = temperaturaDia2

            let temperaturaDia3 = data.forecast[2].temperature.substring(1, data.forecast[2].temperature.length)
            document.getElementById("temperatura-dia3").innerHTML = temperaturaDia3
        })
        .catch(error => console.error(error))
}

function fnDias() {
    // data de hoje e os outros 3 dias início
    let dia = new Date()

    //data de hoje
    let dataDeHoje = dia.getDate() + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear()
    document.getElementById("data").innerHTML = dataDeHoje

    //data dia 1
    let dataDia1 = (dia.getDate() + 1) + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear()
    document.getElementById("dia1").innerHTML = dataDia1

    //data dia 2
    let dataDia2 = (dia.getDate() + 2) + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear()
    document.getElementById("dia2").innerHTML = dataDia2

    //data dia 3
    let dataDia3 = (dia.getDate() + 3) + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear()
    document.getElementById("dia3").innerHTML = dataDia3

    // data de hoje e os outros 3 dias fim
}


function fnMudarTema(descricao) {
    if (descricao == "Partly cloudy") {
        document.getElementById("icone").className = "bi bi-cloud-sun"
        document.getElementById("body").className = "bg-nublado"
    } else if (descricao == "Sunny") {
        document.getElementById("icone").className = "bi bi-sun"
        document.getElementById("body").className = "bg-sol"
    } else if (descricao == "Light rain") {
        document.getElementById("body").className = "bg-chuva"
        document.getElementById("icone").className = "bi bi-cloud-rain"
    } else {
        document.getElementById("body").className = "bg-nublado"
        document.getElementById("icone").className = "bi bi-cloud"
    }
}


document.getElementById("btnPesquisar").addEventListener("click", function(){
    let cidade = document.getElementById("cidade").value

    // fnCarregarDadosTemperatura(cidade)
    fnCarregarDadosCep(cidade)
})

document.getElementById("btnEditar").addEventListener("click", function(){
    document.getElementById("formulario").style.display = "flex"
    document.getElementById("conjunto-local").style.display = "none"
})


fnCarregarDadosTemperatura("Americana")