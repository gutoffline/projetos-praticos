class Pokemon {
    constructor(id, nome, tipo, altura, peso) {
        this.id = id
        this.nome = nome
        this.tipo = tipo
        this.altura = altura
        this.peso = peso
    }
    lutar() { }
    dormir() { }
    comer() { }
    imprimirFicha() {
        console.log(`
            ID: ${this.id}
            NOME: ${this.nome}
            TIPO: ${this.tipo}
            ALTURA: ${this.altura}
            PESO: ${this.peso}
        `)
    }
}


let pokemon1 = new Pokemon(7, 'charmander', 'fogo', 0.61, 8.5)
pokemon1.imprimirFicha()
let pokemon2 = new Pokemon(38, 'Ninetails', 'fogo', 1.1, 19.9)
pokemon2.imprimirFicha()

let pokemon3 = new Pokemon(100,'','fogo',100,89)
pokemon3.imprimirFicha()