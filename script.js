let SuperMercado = document.getElementById("SM")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function adicionar(){
    
    
    if(SuperMercado.value == 0){
        window.alert("Digite um Número Válido")
        item.text = ""
    }else{
        valores.push(Number(SuperMercado.value))
        let item = document.createElement("option")
        item.text = `R$${SuperMercado.value}`
        lista.appendChild(item)
        SuperMercado.value = ""
    }
    
}

function Calcular(){
    if(valores.length == 0){
        window.alert("Adicione valores para finalizar!")
    }else{
        let maior = valores[0]
        let menor = valores[0]
        let total = valores.length
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A media entre os valores é ${media}.</p>`
    
    }
}