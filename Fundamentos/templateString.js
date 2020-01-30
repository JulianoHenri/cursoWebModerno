const nome = 'Rebeca'
const concatenacao = 'ola ' + nome + '!'
const template = `
    Ola
    ${nome}!`//faz a concatenao das strings e exibe como foi digitado.

    console.log(concatenacao,template)
    
    //expressoes...

    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase() // funcao que transforma letras em maiusculas 

    console.log(`Ei... ${up('cuidado')}!`)
