
let nota100 = 0
let nota50 = 0
let nota10 = 0
let nota5 = 0
let nota1 = 0
let qtdNotas1 = document.getElementById('qtd-1')
let qtdNotas5 = document.getElementById('qtd-5')
let qtdNotas10 = document.getElementById('qtd-10')
let qtdNotas50 = document.getElementById('qtd-50')
let qtdNotas100 = document.getElementById('qtd-100')


const valorMaior100 = (valor) =>{
    valorParcial = valor - ( valor%100)
    nota100 = valorParcial/100
    valor -= valorParcial
    return valor
}

const valorMaior50 = (valor) =>{
    nota50 = 1
    valor -= 50
    return valor
}

const valorMaior10 = (valor) =>{
    valorParcial = valor - (valor%10)
    nota10 = valorParcial/10
    valor = valor - valorParcial
    return valor
}

const valorMaior5 = (valor) =>{

    console.log(valor,'dentro da função')
    if (valor>=5){
        valor = valor - 5
        nota5 = 1 
    }
    nota1 = valor
    valor -= valor
    return valor
}
const sacar = () => {
    let saque =  document.getElementById('saque')
    let numSaque = parseInt(saque.value)
    console.log(typeof(numSaque), 'cliquei')
    while (numSaque>0){

        if (numSaque>=100){
            numSaque = valorMaior100(numSaque)
        }

        if(numSaque>=50){
            numSaque = valorMaior50(numSaque)

        }

        if(numSaque>=10){
            numSaque = valorMaior10(numSaque)
        }

        if (numSaque<10){
            numSaque = valorMaior5(numSaque)
        }
        console.log('nota 100 = ', nota100)
        console.log('nota 50 = ', nota50)
        console.log('nota 10 = ', nota10)
        console.log('nota 5 = ', nota5)
        console.log('nota 1 = ', nota1)
    }
    qtdNotas1.innerText =   `${nota1} nota(s) de 1 real`
    qtdNotas5.innerText =   `${nota5} nota(s) de 5 reais`
    qtdNotas10.innerText =  `${nota10} nota(s) de 10 reais`
    qtdNotas50.innerText =  `${nota50} nota(s) de 50 reais`
    qtdNotas100.innerText = `${nota100} nota(s) de 100 reais`
    
    nota1,nota5,nota10,nota50,nota100 = 0
    saque.value = ''

}
