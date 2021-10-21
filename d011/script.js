function verificar() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'));
    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        let resp = window.document.querySelector('#verifique');
        resp.innerHTML = `<p>Analisando o ano de ${ano}...</p><p> O ano de ${ano} é Bissexto</p>`;
    }else {
        let resp = window.document.querySelector('#verifique');
        resp.innerHTML = `<p>Analisando o ano de ${ano}...</p><p> O ano de ${ano} não é Bissexto</p>`;

    }


}


