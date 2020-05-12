let SuperMercado = document.getElementById("SM")
let lista = document.getElementById("lista")
let valores1 = []
let resTotal = document.getElementById("resTotal")
let resCadastro = document.getElementById("resCadastrado")


function adicionar(){
    
    
    if(SuperMercado.value == 0){
        window.alert("Digite um Número Válido")
        item.text = ""
    }else{
        valores1.push(Number(SuperMercado.value))
        let item = document.createElement("option")
        item.text = `R$${SuperMercado.value}`
        lista.appendChild(item)
        SuperMercado.value = ""
    }  
    
    
}

function Calcular(){
    if(valores1.length == 0){
        window.alert("Adicione valores para finalizar!")
    }else{
        let total = valores1.length
        let soma1 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]    
        }
        
        resTotal.value = ""
        resCadastro.value = ""
        resTotal.value += `R$${soma1}`
        resCadastro.value += `${total}`
    }
}