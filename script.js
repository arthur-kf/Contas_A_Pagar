let SuperMercado = document.getElementById("SM")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    
    valores.push(Number(SuperMercado.value))
    let item = document.createElement("option")
    item.text = `Valor ${SuperMercado.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ""
    
}