function Calcular(){
let S = document.getElementById("S")
let P = document.getElementById("P")
let C = document.getElementById("C")

let p1 = Number(S.value)
let p2 = Number(P.value)
let p3 = Number(C.value)

let res = document.getElementById("res")
let R = p1+p2+p3 

    res.innerHTML = `R$${R}`

}