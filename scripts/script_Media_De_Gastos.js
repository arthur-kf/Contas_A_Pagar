let Semana = document.getElementById("semana")
let Mes = document.getElementById("mes")
let Ano = document.getElementById("ano")

let campo_media = document.getElementById("MediaDeGastos")
let resMedia = document.getElementById("mediares")

function semana(){
   //campo_media.value = ""    
    
        let somas = [soma1 = 0 , soma2 = 0 , soma3 = 0]
        let totais = [valores1 = 0 , valoresP = 0 , valoresO = 0 ]
        
        /*
        let soma1 = 0
        let soma2 = 0
        let soma3 = 0
        let total = valores1.length
        let total2 = valoresP.length
        let total3 = valoresO.length
        let media = 0
        */
       
        let media = 0

        for(let pos in totais){
            somas += totais[pos]
        }

        media += somas.length / totais.length
        //media = soma1 / total + soma2 / total2 + soma3 / total3
        resMedia.innerHTML = media
    
}
function mes(){
    campo_media.value = ""
}

function ano(){
    campo_media.value = ""
}