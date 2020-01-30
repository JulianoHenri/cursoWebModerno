const prod1 = {}
prod1.nome = 'Celular ultra mega '
prod1.preco = 4998.90
prod1['Desconto Legal']= 0.40 // evitar atributos com espaços

console.log(prod1) //Nao funcionou.

const prod2={
    nome: 'Camisa polo',
    preco: 79.90,
}

'{"nome": "Camisa Polo ", "preco": 79.90}'//exemplo de JSON
console.log(prod2)

