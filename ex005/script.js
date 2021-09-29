
alert('Bem vindo(a) ao meu site!')

function calcular() {
    let numero = window.prompt('Digite um número: ')
    let resp = document.querySelector('section#resultado')
    resp.innerHTML = `<p> O dobro de ${numero} é ${numero*2} e a metade é ${numero/2}!</p>`
}