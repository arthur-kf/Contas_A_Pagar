let semana = document.getElementById("semana")
let mes = document.getElementById("mes")
let ano = document.getElementById("ano")

let campo_media = document.getElementById("MediaDeGastos")


function Semana(){
    
    //campo_media.value = ""    
    campo_media.value = media

        let soma1 = 0
        let soma2 = 0
        let soma3 = 0
        let total = valores1.length
        let total2 = valoresP.length
        let total3 = valoresO.length

        for(let pos in valores1){
            soma1 += valores1[pos]
            soma2 += valoresP[pos]
            soma3 += valoresO[pos]    
        }
        media = soma1 / total + soma2 / total2 + soma3 / total3
    
    
}

function Mes(){
    campo_media.value = ""
}

function Ano(){
    campo_media.value = ""
}