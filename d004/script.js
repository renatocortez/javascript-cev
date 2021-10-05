function resultado() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = Number(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    let dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}?`))
    troco = dinheiro - preco

    alert(`Você comprou ${produto} que custou R$${preco}.
    Deu R$${dinheiro} em dinheiro e vai receber R$${troco} de troco.
    Volte sempre!`)
    
}