let dolar = Number(window.prompt('Qual é a cotação do dólar? '))

function converter() {
    let real = Number(window.prompt('Quantos reais você tem na carteira? '))

    cotacao = real / dolar

    let resp = window.document.querySelector('#conversao')
    resp.innerHTML = `<p>Com R$ ${real} equivale a US$ ${cotacao}</p>`

}
