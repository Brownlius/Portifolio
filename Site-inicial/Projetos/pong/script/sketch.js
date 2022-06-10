let chanceDeErro = 0;
let meusPontos = 0;
let pontosOponente = 0;

let tela;
//variáveis da bolinha
let bola = {X : 300, Y : 200, Raio : 15, cor : ('#ffff')};
//sons do jogo
let raquetada;
let pontuacao;
let trilha;
let canvas = {Comprimento : 920, Altura:920};

//velocidade da bolinha
let velocBola = {X: 6, Y : 3};

//variáveis da raquete aliada
let raquete = { X: 5, Y:150, Comprimento : 15, Altura : 130 , cor: ('aliceblue')};

//variáveis da raquete oponente
let raqueteOponente = {X : (canvas.Comprimento - raquete.Comprimento -5), Y : canvas.Altura/2};



function geraCanvas(){
  tela = document.getElementById("canvas");
  ctx = tela.getContext('2d');
  
}
function createCanvas(){
  tela.width = 920;
  tela.height = 920;
  ctx.fillStyle = 'rgb(20, 33, 44)';
  ctx.fillRect(0, 0, tela.width, tela.height);

}

window.onload = function (){
  
  geraCanvas();
  setInterval(update, 1000/80);
  window.addEventListener('keydown', (e) =>{

    if (e.code == "KeyW"){
      raquete.Y -= 10;
    }
    if (e.code == "KeyS"){
      raquete.Y += 10;
    }
  });
  
}
 
function update() {
  
  createCanvas();

  mostraBolinha();

  movimentaBolinha();

  verificaColisaoBorda();

  mostraRaquete();

  mostraRaqueteOponente();

  verificaColisaoRaquete();
  
  // verificaColisaoRaqueteOponente();
  // movimentoRaqueteOponente();
  // incluiPlacar();
  // marcarponto();
  // calculaChanceDeErro();

}

  
function mostraBolinha(){
  ctx.beginPath();
  ctx.arc(bola.X, bola.Y, bola.Raio, (0,2 * Math.PI), false);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgb(24, 214, 119)';
  ctx.fillStyle = 'aliceblue';
  ctx.fill();
  ctx.stroke();
}

function movimentaBolinha(){
  bola.X += velocBola.X;
  bola.Y += velocBola.Y;
}

function verificaColisaoBorda(){
  if (bola.X + bola.Raio > tela.width ||
    bola.X - bola.Raio < 0){
    velocBola.X *= -1;
  }
  if (bola.Y + bola.Raio> tela.height ||
    bola.Y - bola.Raio < 0){
    velocBola.Y *= -1;
  }
}

function mostraRaquete(){
  ctx.fillStyle = raquete.cor;
  ctx.fillRect(raquete.X, raquete.Y,raquete.Comprimento, raquete.Altura)}

  function mostraRaqueteOponente(){
  ctx.fillStyle = raquete.cor;
  ctx.fillRect(raqueteOponente.X, raqueteOponente.Y,raquete.Comprimento, raquete.Altura )}

function verificaColisaoRaquete(){
  if ((bola.X - bola.Raio - 3) < (raquete.X + raquete.Comprimento) && (bola.Y + bola.Raio) > raquete.Y && (bola.Y < raquete.Y + raquete.Altura)){
    velocBola.X *= -1;
  }
}

function calculaChanceDeErro() {
  if (pontosOponente >= meusPontos) {
    chanceDeErro += 1.5
    if (chanceDeErro >= 39){
    chanceDeErro = 40
    }
  } else {
    chanceDeErro -= 1
    if (chanceDeErro <= 35){
    chanceDeErro = 35
    }
  }
}
function movimentoRaqueteOponente(){
 velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 39;
  yRaqueteOponente += velocidadeYOponente + chanceDeErro
  calculaChanceDeErro()
}
function incluiPlacar(){
textAlign(CENTER);
       stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20, 5);
    fill(255);
    text(meusPontos, 170, 26); 
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20,5);
    fill(255);
    text(pontosOponente, 470, 26)
  
}
function marcarponto(){
 if (xBolinha >= 590){
  meusPontos += 1;
  pontuacao.play();
}
  if (xBolinha <= 10){
  pontosOponente  += 1  
  pontuacao.play();}
 }