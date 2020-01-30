const pessoa = {
nome : 'Ana',
idade : 5,
endereco: {
    logradouro : 'Rua abc',
    numero: 1000
    }
}

const { nome,idade} = pessoa // tira atributos de detro do objeto 
console.log(nome,idade)

const { nome: n ,idade: i } = pessoa // tira e renomeia atributos de detro do objeto 
console.log(n,i)

const {endereco:{logradouro,numero}} = pessoa
console.log(logradouro,numero)