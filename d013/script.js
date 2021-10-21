function clicar() {
    let nome = String(window.prompt('Nome do aluno:'));
    let nota1 = Number(window.prompt('Digite a 1ª nota:'));
    let nota2 = Number(window.prompt('Digite a 2ª nota:'));
    let media = (nota1 + nota2) / 2;
    if (media > 7) {
        let resp = window.document.querySelector('#clique');
        resp.innerHTML = `<p>A média do aluno ${nome} é de ${media}</p><p>Aprovado, parabéns!</p>`;
    } else if (media < 5) {
        let resp = window.document.querySelector('#clique');
        resp.innerHTML = `<p>A média do aluno ${nome} é de ${media}.</p><p>Reprovado, estude mais!</p>`;
    } else {
        let resp = window.document.querySelector('#clique');
        resp.innerHTML = `<p>A média do aluno ${nome} é de ${media}.</p><p>Recuperação, se prepare!</p>`;
        {
    }
}
}