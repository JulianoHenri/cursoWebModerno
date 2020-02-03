const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }//Não pode ter funcoes dentro
console.log(JSON.stringify(obj)) //transforma o OBJ em JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))//Nao esta conrreto
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))//Nao esta Correto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))// Converte JSON em OBJ
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
