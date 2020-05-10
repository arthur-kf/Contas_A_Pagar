let Outros = document.getElementById("OU")
let listaO = document.getElementById("listaO")
let valoresO = []
let resTotalO = document.getElementById("resTotalO")
let resCadastroO = document.getElementById("resCadastradoO")

function adicionarO(){
    
    
    if(Outros.value == 0){
        window.alert("Digite um Número Válido")
        item.text = ""
    }else{
        valoresO.push(Number(Outros.value))
        let item = document.createElement("option")
        item.text = `R$${Outros.value}`
        listaO.appendChild(item)
        Outros.value = ""
    }  
    
    
}

function CalcularO(){
    if(valoresO.length == 0){
        window.alert("Adicione valores para finalizar!")
    }else{
        let total = valoresO.length
        let soma = 0

        for(let pos in valoresO){
            soma += valoresO[pos]    
        }
        
        resTotalO.value = ""
        resCadastroO.value = ""
        resTotalO.value += `R$${soma}`
        resCadastroO.value += `${total}`
    }
}