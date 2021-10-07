function calcular() {
    var produto = window.prompt('Qual produto que você está comprando? ')
    var preco = Number(window.prompt(`Qual é o preço do ${produto}? `))
    desconto = preco *(10 / 100)
    precofinal = preco - (preco * 10 / 100)

    var resp = window.document.querySelector('#calculando')
    resp.innerHTML = `<p>Calculando desconto de 10% para ${produto}:</p><p>Preço à vista R$ ${preco}.</p><p>Seu desconto é de R$ ${desconto}.</p><p>Preço final do ${produto} = R$ ${precofinal}.</p>`
}