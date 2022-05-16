let chanceDeErro = 0;
let meusPontos = 0;
let pontosOponente = 0;
//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;
let corbola = ('#ffff');
//sons do jogo
let raquetada;
let pontuacao;
let trilha;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let velocidadeYOponente;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let corRaquete = ('#1fff')
let hit = false;
//variáveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

function preload(){
trilha = loadSound ("trilha.mp3");
pontuacao = loadSound ("ponto.mp3");
raquetada = loadSound ("raquetada.mp3");
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente)
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcarponto();
  calculaChanceDeErro();
}

  
function mostraBolinha(){
  fill (corbola);
  noStroke();
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  fill(corRaquete);
  noStroke ();
  rect(x,y,raqueteComprimento,raqueteAltura, 15);
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