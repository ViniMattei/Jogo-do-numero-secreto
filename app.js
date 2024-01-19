let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexnoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brasilian Portuguese Female' , {rate: 1.2});
}

function exibirMensagemInicial() {
  exibirTexnoNaTela('h1' , 'Jogo do numero secreto');
  exibirTexnoNaTela('p' , 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

exibirTexnoNaTela('h1' , 'Jogo do numero secreto');
exibirTexnoNaTela('p' , 'Escolha um numero entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTexnoNaTela('h1' , 'acertou');
    let palavraTentativas = tentativas > 1 ? 'tentivas' : 'tentativa';
    let mensagemTentativas = `Voce descobriou o numuro secreto com ${tentativas} ${palavraTentativas}`;
    exibirTexnoNaTela('p' , mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
        exibirTexnoNaTela('p' , 'O numéro secreto é menor que ');
    } else {
      exibirTexnoNaTela('p', 'O Numéro secreto é maior');
    }
    tentativas++;
    limparCampo();
  
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = ''; 
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

