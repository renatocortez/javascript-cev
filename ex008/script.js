function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-masculino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescente-masculino.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-masculino.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-feminino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescente-feminino.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-feminino.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
        
            
            
        

    
    
