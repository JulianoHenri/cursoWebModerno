const escola ="Cod3r"

console.log(escola.charAt(4)) // restorna a posição do indice.
console.log(escola.charCodeAt(3)) // restorna a tabela unicode.
console.log(escola.indexOf("3")) // busca a posiçao do numero ou letra digitado.

console.log(escola.substring(1))//busca apartir do indice digitado
console.log(escola.substring(0,3))//busca apartir do 1 indice digitado ate a quahntia do ultimo digitado

console.log('escola '.concat(escola).concat("!")) // faz a concatenação das strings
console.log('escola '+(escola)+("!")) // faz a concatenação das strings


console.log(escola.replace(3, 'e'))// substitui o indice da posição pelo digitado

console.log('Ana,Maria,Pedro'.split(','))//criar array apartir do caracter digitado