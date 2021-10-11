function calcule() {
    let a = Number(window.prompt('Qual é o valor de a? '))
    let b = Number(window.prompt('Qual é o valor de b? '))
    let c = Number(window.prompt('Qual é o valor de c? '))
    delta = (b**2) - 4 * a * c
    

    let resp = window.document.querySelector('#calcular')
    resp.innerHTML = `<p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p><p>O cálculo realizado será &Delta; = ${b}² - 4 . ${a} . ${c}</p><p>O valor calculado foi &Delta; = ${delta}</p>`
}