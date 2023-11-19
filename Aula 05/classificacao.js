var jogadores = [
    {
      nome: "Time troll",
      vitoria: 0,
      derrota: 0,
      abatesTime: 0
    },
    {
      nome: "Unidos do sup",
      vitoria: 0,
      derrota: 0,
      abatesTime: 0
    }
  ];
  
  // var paulo = {
  //   nome: "Paulo",
  //   vitoria: 0,
  //   derrota: 0,
  //   abatesTime: 0
  // };
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = "";
  
    for (let i = 0; i < jogadores.length; i++) {
      let jogador = jogadores[i];
      elementoTabela.innerHTML =
        elementoTabela.innerHTML +
        `
              <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitoria}</td>
                <td>${jogador.derrota}</td>
                <td>${jogador.abatesTime}</td>
                <td><button onClick="adicionarVitoria(event)">Vitória</button></td>
                <td><button onClick="adicionarDerrota(event)">Derrota</button></td>
                <td><button onClick="adicionarKillTime(event)">Kill</button></td>
              </tr>
        `;
    }
  }
  
  function adicionarVitoria(event) {
    var linha = event.target.parentNode.parentNode;
    var indiceLinha = linha.rowIndex;
    jogadores[indiceLinha - 1].vitoria++;
    exibirNaTela();
  }
  
  function adicionarDerrota(event) {
    var linha = event.target.parentNode.parentNode;
    var indiceLinha = linha.rowIndex;
    jogadores[indiceLinha - 1].derrota++;
    exibirNaTela();
  }
  
  function adicionarKillTime(event) {
    var linha = event.target.parentNode.parentNode;
    var indiceLinha = linha.rowIndex;
    jogadores[indiceLinha - 1].abatesTime++;
    exibirNaTela();
  }
  
  // desafio 1: Adicionar outros jogadores, usando listas. ExibirNatela ter um 'for' que passa por todo os ítens dos jogadores, passando todas as funções e etc.
  // desafio 2: Personalizar a tabela, para um jogo que você gosta. [OK]
  