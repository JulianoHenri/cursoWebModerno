const pessoa = {
    nome: ' Rebeca',
    idade: 2,
    peso : 13
}

console.log(Object.keys(pessoa));//Pega todas as chaves do objeto
console.log(Object.values(pessoa));//Pega todos os valores do objeto
console.log(Object.entries(pessoa));//Pega todo conteudo do objeto

Object.entries (pessoa).forEach(([chave, valor]) => { //desestruturando array.
    console.log(`${chave} ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)//concatena todos atributos dentro do obj destino 

Object.freeze(obj)
obj.c = 1234
console.log(obj)