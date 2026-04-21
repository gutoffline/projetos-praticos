const times = [
    "Atlético‑MG",
    "Bahia",
    "Botafogo",
    "Red Bull Bragantino",
    "Ceará",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Palmeiras",
    "Santos",
    "São Paulo",
    "Sport",
    "Vasco",
    "Vitória"
];



const cidadesTimes = [
    "Belo Horizonte",     // Atlético‑MG
    "Salvador",           // Bahia
    "Rio de Janeiro",     // Botafogo
    "Bragança Paulista",  // Red Bull Bragantino
    "Fortaleza",          // Ceará
    "São Paulo",          // Corinthians
    "Belo Horizonte",     // Cruzeiro
    "Rio de Janeiro",     // Flamengo
    "Rio de Janeiro",     // Fluminense
    "Fortaleza",          // Fortaleza
    "Porto Alegre",       // Grêmio
    "Porto Alegre",       // Internacional
    "Caxias do Sul",      // Juventude
    "Mirassol",           // Mirassol
    "São Paulo",          // Palmeiras
    "Santos",             // Santos
    "São Paulo",          // São Paulo
    "Recife",             // Sport
    "Rio de Janeiro",     // Vasco
    "Salvador"            // Vitória
];

function fnListaTimes() {
    for (let i = 0; i < times.length; i++) {
        document.getElementById("lista_times").innerHTML += `
        <div class="col-6 border text-center">
            ${times[i]} - ${cidadesTimes[i]}
        </div>
        `
    }
}

fnListaTimes()


