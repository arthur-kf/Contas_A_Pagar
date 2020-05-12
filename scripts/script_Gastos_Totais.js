let GastosTotais = document.getElementById("GastosTotais")


function CalcularGastosTotais(){
    if(valores1.length == 0 && valoresO.length == 0 && valoresP.length == 0){
        window.alert("Adicione valores para finalizar!")
    
    }
    
    //Se Faltar Apenas Um Espaço
    else if(valores1.length == 0){
        let soma2 = 0
        let soma3 = 0

        for(let pos in valoresP){
            soma2 += valoresP[pos]
            soma3 += valoresO[pos]    
        }
        GastosTotais.value = ""
        GastosTotais.value += `R$${soma2 + soma3}`
        
    }
    else if(valoresP.length == 0){
        let soma1 = 0
        let soma3 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
            soma3 += valoresO[pos]    
        }
        GastosTotais.value = ""
        GastosTotais.value += `R$${soma1 + soma3}`
        
    }
    else if(valoresO.length == 0){
        let soma1 = 0
        let soma2 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
            soma2 += valoresP[pos]   
        }
        GastosTotais.value = ""
        GastosTotais.value += `R$${soma1 + soma2}`
        
    }
    //Se Faltar Apenas Um Espaço
    else{
        let soma1 = 0
        let soma2 = 0
        let soma3 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
        for(let pos in valoresP)
            soma2 += valoresP[pos]
        for(let pos in valoresO)
            soma3 += valoresO[pos]   
        }
        GastosTotais.value = ""
        GastosTotais.value = `R$${soma1 + soma2 + soma3}`
        
    }

} 
