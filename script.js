let SuperMercado = document.getElementById("S")
let p1 = Number(SuperMercado.value)
let valores = []
let lista = document.getElementById("lista")


let res = document.getElementById("res")



function adicionar(){
    valores.push(Number(SuperMercado.value))
    let item = document.createElement("option")
    item.text = `Valor ${SuperMercado.value} adicionado`
    lista.appendChild(item)

}