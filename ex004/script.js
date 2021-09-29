function inicio() {
    let nome = window.prompt('Qual é seu nome?')
    let resp = window.document.getElementById('resultado')
    resp.innerHTML = `<p>Olá, <bold>${nome}</bold>! É um grande prazer te conhecer!`
}