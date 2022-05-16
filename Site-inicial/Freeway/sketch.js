function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  voltaPosicaoInicialDoCarro();
  incluiPontos ();
  marcaPontos();
  verificaColisao();
}


