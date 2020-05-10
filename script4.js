let GastosTotais = document.getElementById("GastosTotais")


function CalcularGastosTotais(){
    if(valores1.length == 0){
        window.alert("Adicione valores para finalizar!")
    }else{
        let soma1 = 0
        let soma2 = 0
        let soma3 = 0

        for(let pos in valores1){
            soma1 += valores1[pos]
            soma2 += valoresP[pos]
            soma3 += valoresO[pos]    
        }
        GastosTotais.value = ""
        GastosTotais.value += `R$${soma1 + soma2 + soma3}`
        
    }

} 
