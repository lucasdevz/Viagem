//Dom

const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const btcalcular = document.querySelector('#btcalcular')
const resultado = document.querySelector('#resultado')

//Eventos

btcalcular.addEventListener('click', viagem)

//Funções

function viagem() {
    d = Number (distancia.value)
    c = Number (consumo.value)
    p = Number (preco.value)

    formula = (d/c)*P

    resultado.textContent = `O valor gasto para viagem será de R$ ${formula.toFixed(2)}`

}