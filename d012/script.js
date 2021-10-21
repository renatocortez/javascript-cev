function verificar() {
    let anterior = Number(window.prompt('Qual era o preço anterior do produto? '));
    let atual = Number(window.prompt('Qual é o preço atual do produto?'));
    if (anterior < atual) {
        let caro = atual - anterior;
        let porcem = ((atual / anterior) - 1 )* 100;
        let resp = window.document.querySelector('#verifique');
        resp.innerHTML = `<p>O produto custava R$ ${anterior} e agora custa R$ ${atual}.<p>Hoje o produto está mais caro.</p><p>O valor aumentou R$ ${caro} em relação ao preço anterior.</p><p>Uma variação de ${porcem}% para cima.</p>`;
    }else if (anterior > atual) {
        let barato = anterior - atual;
        let porcem = ((anterior / atual) - 1 )* 100;
        let resp = window.document.querySelector('#verifique');
        resp.innerHTML = `<p>O produto custava R$ ${anterior} e agora custa R$ ${atual}.<p>Hoje o produto está mais barato.</p><p>O valor diminuiu R$ ${barato} em relação ao preço anterior.</p><p>Uma variação de ${porcem}% para baixo.</p>`;
    }
}


