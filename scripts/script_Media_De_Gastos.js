let campo_media = document.getElementById("MediaDeGastos")
let resMedia = document.getElementById("mediares")

function semana(){
    if(valores1.length == 0 & valoresP.length == 0 & valoresO == 0){
        window.alert("Valores Invalidos!")
    }else{
    
        let soma1 = 0
        let soma2 = 0
        let soma3 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
        }
        for(let pos in valoresP){
            soma2 += valoresP[pos]
        }
        for(let pos in valoresO){
            soma3 += valoresO[pos]
        }

        let somas = [soma1 + soma2 + soma3]
        let totais = [valores1.length + valoresP.length + valoresO.length]
        let media = somas / 4

        campo_media.value = "R$" + media

    }
}
function mes(){
    if(valores1.length == 0 & valoresP.length == 0 & valoresO == 0){
        window.alert("Valores Invalidos!")
    }else{
    
        let soma1 = 0
        let soma2 = 0
        let soma3 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
        }
        for(let pos in valoresP){
            soma2 += valoresP[pos]
        }
        for(let pos in valoresO){
            soma3 += valoresO[pos]
        }

        let somas = [soma1 + soma2 + soma3]
        let totais = [valores1.length + valoresP.length + valoresO.length]
        let media = somas / 12

        campo_media.value = "R$" + media

    }
}
function ano(){
    if(valores1.length == 0 & valoresP.length == 0 & valoresO == 0){
        window.alert("Valores Invalidos!")
    }else{
    
        let soma1 = 0
        let soma2 = 0
        let soma3 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
        }
        for(let pos in valoresP){
            soma2 += valoresP[pos]
        }
        for(let pos in valoresO){
            soma3 += valoresO[pos]
        }

        let somas = [soma1 + soma2 + soma3]
        let totais = [valores1.length + valoresP.length + valoresO.length]
        let media = somas / 60

        campo_media.value = "R$" + media

    }
}
