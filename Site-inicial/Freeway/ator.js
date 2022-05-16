//código do ator
let xAtor = 110;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;



function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 3;
    
      
    }
  if (keyIsDown(83)){
  if(podeMover()){
    yAtor += 3;
  }
}
}
function podeMover(){
  return yAtor < 366
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      colisaoSom.play();
      if (maiorQueZero()){
        meusPontos -= 1
        
      }
   
    }
  }
}
function maiorQueZero(){
  return meusPontos > 0 
}

function colidiu(){
  yAtor = 366
}
  function incluiPontos(){
  stroke(230,81,0);
  fill(230,181,0);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 27)
}

function marcaPontos(){
  if (yAtor <= 15){
    meusPontos +=1
    colidiu();
    pontos.play();
  }
}