let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo  = 1 
console.log(!!isAtivo)//esclamação serve para negar a logica //forca a cpnversao para verdadeiro pou falso

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os Falsos.......')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('Pra finalizadar ')
console.log(!!''|| null || 0 || 'Epa') // Restorna o primeiro verdaderio que ele encontrar

let nome = ''
console.log(nome || 'Desconhecido')// caso nome nao esteja prenchido retorna desconhecido
