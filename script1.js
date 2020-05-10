let SuperMercado = document.getElementById("SM")
let lista = document.getElementById("lista")
let valores = []
let resTotal = document.getElementById("resTotal")
let resCadastro = document.getElementById("resCadastrado")

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
        let total = valores.length
        let soma = 0

        for(let pos in valores){
            soma += valores[pos]    
        }
        
        resTotal.value = ""
        resCadastro.value = ""
        resTotal.value += `R$${soma}`
        resCadastro.value += `${total}`
    }
}