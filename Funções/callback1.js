//callback passar uma funcao que sera chamada quando um evento acontecer.
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)// foreach chama a funcao para cada elemnto encontrado
fabricantes.forEach(fabricante => console.log(fabricante))