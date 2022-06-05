let chanceDeErro = 0;
let meusPontos = 0;
let pontosOponente = 0;

let tela;
//variáveis da bolinha
let bola = {X : 300, Y : 200, raio : 15, cor : ('#ffff')};
//sons do jogo
let raquetada;
let pontuacao;
let trilha;
let canvas = {comprimento : 920, altura:920};

//velocidade da bolinha
let velocBola = {X: 6, Y : 6};

//variáveis da raquete aliada
let raquete = { X: 5, Y:150, comprimento : 15, altura : 130 , cor: ('aliceblue')};

//variáveis da raquete oponente
let raqueteOponente = {X : (canvas.comprimento - raquete.comprimento -5), Y : canvas.altura/2};



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
  
}

function update() {
  
  createCanvas();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  mostraRaqueteOponente();
  // movimentaMinhaRaquete();
  // verificaColisaoRaquete(xRaquete,yRaquete);
  // mostraRaquete (xRaqueteOponente, yRaqueteOponente)
  // movimentoRaqueteOponente();
  // verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  // incluiPlacar();
  // marcarponto();
  // calculaChanceDeErro();
}

  
function mostraBolinha(){
  ctx.beginPath();
  ctx.arc(bola.X, bola.Y, bola.raio, (0,2 * Math.PI), false);
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
  if (bola.X + bola.raio > tela.width ||
    bola.X - bola.raio < 0){
    velocBola.X *= -1;
  }
  if (bola.Y + bola.raio> tela.height ||
    bola.Y - bola.raio < 0){
    velocBola.Y *= -1;
  }
}

function mostraRaquete(){
  ctx.fillStyle = raquete.cor;
  ctx.fillRect(raquete.X, raquete.Y,raquete.comprimento, raquete.altura )
}
function mostraRaqueteOponente(){
  ctx.fillStyle = raquete.cor;
  ctx.fillRect(raqueteOponente.X, raqueteOponente.Y,raquete.comprimento, raquete.altura )
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x,y){
   hit = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha,yBolinha, raio);
  if (hit){
    velocidadeXBolinha *= -1;
    raquetada.play();
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