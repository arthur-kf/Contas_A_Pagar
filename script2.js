let Padaria = document.getElementById("PD")
let listaP = document.getElementById("listaP")
let valoresP = []
let resTotalP = document.getElementById("resTotalP")
let resCadastroP = document.getElementById("resCadastradoP")

function adicionarP(){
    
    
    if(Padaria.value == 0){
        window.alert("Digite um Número Válido")
        item.text = ""
    }else{
        valoresP.push(Number(Padaria.value))
        let item = document.createElement("option")
        item.text = `R$${Padaria.value}`
        listaP.appendChild(item)
        Padaria.value = ""
    }  
    
    
}

function CalcularP(){
    if(valoresP.length == 0){
        window.alert("Adicione valores para finalizar!")
    }else{
        let total = valoresP.length
        let soma = 0

        for(let pos in valoresP){
            soma += valoresP[pos]    
        }
        
        resTotalP.value = ""
        resCadastroP.value = ""
        resTotalP.value += `R$${soma}`
        resCadastroP.value += `${total}`
    }
}