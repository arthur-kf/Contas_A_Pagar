let GastosTotais = document.getElementById("GastosTotais")


function CalcularGastosTotais(){
    if(valores1.length == 0 & valoresO.length == 0 & valoresP.length == 0){
        window.alert("Adicione valores para finalizar!")
    
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

        GastosTotais.value = ""
        GastosTotais.value += "R$" + somas
        
    }

} 
