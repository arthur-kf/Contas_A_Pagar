const Outros = document.getElementById("OU");
const listaO = document.getElementById("listaO");
let valoresO = [];
const resTotalO = document.getElementById("resTotalO");
const resCadastroO = document.getElementById("resCadastradoO");

function adicionarO() {
  if (Outros.value == 0) {
    window.alert("Digite um Número Válido");
    item.text = "";
  } else {
    valoresO.push(Number(Outros.value));
    let item = document.createElement("option");
    item.text = `R$${Outros.value}`;
    listaO.appendChild(item);
    Outros.value = "";
  }
}

function CalcularO() {
  if (valoresO.length == 0) {
    window.alert("Adicione valores para finalizar!");
  } else {
    let total = valoresO.length;
    let soma3 = 0;

    for (let pos in valoresO) {
      soma3 += valoresO[pos];
    }

    resTotalO.value = "";
    resCadastroO.value = "";
    resTotalO.value += `R$${soma3}`;
    resCadastroO.value += `${total}`;
  }
}
