alert('Olá, fique a vontade!')

function resposta() {
    let num1 = Number(window.prompt('Digite o 1° número:'))
    let num2 = Number(window.prompt('Digite o 2° número:'))
    resposta = num1 + num2

    let resp = document.querySelector('section#resultado')
    resp.innerHTML = `<p>${num1} + ${num2} = ${resposta}</p>`


}