function criarProduto(nome,preco) {
    return {
        nome,
        preco,
        desconto : 0.1
        
    }
}

console.log(criarProduto('Coca',1.99))
console.log(criarProduto('Notebook',2199.49))
console.log(criarProduto('ipad',1199.49))