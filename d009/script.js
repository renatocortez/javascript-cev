function reajuste() {
    let nome = window.prompt('Digite o nome do funcionário: ')
    let salario = Number(window.prompt(`Digite o salário de ${nome}:`))
    let acrescimo = Number(window.prompt(`O salário de ${nome} será ajustado em quantos % ?`))

    aumento = salario * acrescimo / 100
    totalsal = salario + aumento

    let resp = window.document.querySelector('#reajustar')
    resp.innerHTML = `<p>${nome} recebeu um aumento salarial!</p><p>O salário atual: R$ ${salario}</p><p>Aumento de ${acrescimo}% correspondente a R$ ${aumento} no próximo mês.</p><p>Novo salário de ${nome} = R$ ${totalsal}.</p> `
}