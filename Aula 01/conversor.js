// PARA TESTE DOS DESAFIOS DESCOMENTE O CÓDIGO QUE VC DESEJA TESTAR :)
// ================================================================================
// DESAFIO 1: Inserir uma linha ao projeto para exibir o valor em Bitcoin.
// var valorEmReal = 5;
// var taxaCambioBitcoin = 180902.31;
// var valorEmBitcoin = valorEmReal / taxaCambioBitcoin;
// alert("R$ " + valorEmReal + " custa " + valorEmBitcoin.toFixed(6) + " BTC");
// =================================================================================

// ================================================================================
// DESAFIO 2: Adicionar no alert o nome do usuário
// var nome = prompt("Olá! Digite seu nome: ");
// var valorEmReal2 = prompt(
//   "Olá " + nome + ", digite o valor que você deseja converter em BTC: "
// );
// var taxaCambioBitcoin = 180902.31;
// var valorEmBtc = valorEmReal2 / taxaCambioBitcoin;
// alert(
//   "R$ " + valorEmReal2 + " reais" + " custa " + valorEmBtc.toFixed(6) + " BTC"
// );
// ================================================================================

// ================================================================================
// DESAFIO 3: Converter anos-luz em metros
// Seguindo essa fórmula que o ChatGPT disponibilizou: distanciaEmMetros = AnosLuz*velocidadeDaLuz*numeroDeSegundos
// ou seja: valorEmMetros = valorEmAnosLuz*299792.458*31556.952
var nome = prompt("Olá! Digite seu nome: ");

// Verifica se o nome é null ou vazio
if (nome === null || nome.trim() === "") {
    alert("Nome inválido. Recarregue a página e tente novamente.");
} else {
    var valorEmAnosLuz = prompt("Olá " + nome + ", digite o valor em anos-luz que você deseja converter em metros: ");

// Verifica se o valorEmAnosLuz é null ou vazio
if (valorEmAnosLuz === null || valorEmAnosLuz.trim() === "") {
    alert("Valor inválido. Recarregue a página e tente novamente.");
} else {
    valorEmAnosLuz = parseFloat(valorEmAnosLuz);

    // Verifica se a conversão para float foi bem-sucedida
    if (!isNaN(valorEmAnosLuz)) {
      var valorEmMetros = valorEmAnosLuz * 299792458 * 31556952;
        alert(
            nome +
            ", " +
            valorEmAnosLuz +
            " anos-luz " +
            "equivale a " +
            valorEmMetros +
            " metros"
        );
    } else {
        alert("Por favor, digite um valor válido para anos-luz.");
    }
}
}
// ================================================================================
