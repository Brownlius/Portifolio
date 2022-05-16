// imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//sons do jogo
let trilha;
let colisaoSom;
let pontos; 

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
//Sons
  trilha = loadSound("Sons/trilha.mp3");
  colisaoSom = loadSound("Sons/raquetada.mp3");
  pontos = loadSound("Sons/ponto.mp3");
}
