var numeroSecreto = Math.floor(Math.random() * 1000) + 1; //Gera números aleatórios de 1 a 1000

var quantidadeDeTentativas = 0;
while(chute != numeroSecreto){
  var chute = prompt("Digite o número entre 1 e 1000: ");

  if(chute == '' || chute == null ){
    alert("Por favor, digite um valor válido.");
    continue; 
    // A palavra-chave 'continue' em JavaScript é usada para pular o restante do código no bloco de loop atual 
    //e começar a próxima iteração do loop imediatamente.
  }

  quantidadeDeTentativas++; //acumula a quantidade de tentativas do usuário

  if(chute == numeroSecreto){
    alert("Você acertou. Parabéns!!! :)");
  }else if (chute > numeroSecreto){
    alert("Errou... O número secreto é menor do que " + chute);
  }else if (chute < numeroSecreto){
    alert("Errou... O número secreto é maior do que " + chute);
  }

  // diferenciar o texto no singular e no plural seguindo a quantidade de tentativas
  if(quantidadeDeTentativas == 1){
    alert("Você fez " + quantidadeDeTentativas + " tentativa." );
  }else{
    alert("Você fez " + quantidadeDeTentativas + " tentativas." );
  }

  if(quantidadeDeTentativas == 10){
    alert("Você utilizou o número máximo de tentativas. O número sercreto era " + numeroSecreto);
    chute = numeroSecreto; //encerra o loop do while
  }
}

// desafio 1: informar se o 'chute' é menor ou maior que o número secreto
// desafio 2: informar a quantidade de tentativas que o jogador já fez até o momento 
// desafio 3: o jogo deve ter o intervalo de 1 a 1000 e não de 0 a 1000
// desafio 4: informar e limitar o número máximo de tentativas para acertar o número secreto
// ---------> o número máximo de tentativas é 10 para resolver esse jogo