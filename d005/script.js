function converter() {
    let metros = Number(window.prompt('Digite uma distância em metros(m)'))

    km = metros / 1000
    hm = metros / 100
    dam = metros / 10
    dm = metros * 10
    cm = metros * 100
    mm = metros * 1000

    let resp = window.document.querySelector('#conversao')
    resp.innerHTML = `<p>A distância de ${metros} metros, corresponde a...</p><p>${km}quilômetros(Km)</p><p>${hm} hectômetros(Hm)</p><p>${dam} decâmetros(Dam)<p>${dm} decímetros(dm)</p><p>${cm} centimetros</p><p>${mm} milímetros(mm)</p> `
}