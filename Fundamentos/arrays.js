const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4]= 10
console.log(valores)
console.log(valores.length)//length mostra a quantidade de elemntos do array

valores.push({id: 3}, false, null, 'teste' )// insere dados nos array

console.log(valores)

console.log(valores.pop())//retira o ultimo valor do array (Exclui)
delete valores [0]//deleta o dado da posição digitada
console.log(valores)

console.log(typeof valores)