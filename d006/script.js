function converter() {
    let celcius = Number(window.prompt('Digite uma temperatura em °C(Celsius)'))

    kelvin = celcius + 273.15
    fah = (celcius * 9 / 5) + 32

    let resp = window.document.querySelector('#conversao')
    resp.innerHTML = `<p>A temperatura de ${celcius}, equivale a...</p><p>${kelvin}°K (Kelvin)</p><p>${fah}°F (Fahrenheit)</p>`
}