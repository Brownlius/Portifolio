var tamanhoBloco = 26;
var linhas = 30;
var colunas = 30;
var tela;
var ctx;
//cabeça
var xGabi = 5 * tamanhoBloco; 
var yGabi = 5 * tamanhoBloco;
var xVelocidade;
var yVelocidade;
let direcaoInicial = 0;
//corpo
var corpoCobra = [];
//comida
var xSushi;
var ySushi;
let imgSushi;
// Obstaculos
var xObstaculos = [];
var yObstaculos = [];
//Marca pontos
var qtdVidas= 5;
var xVidas;
var comidasComidas = 0;
var comidasComidasTotal = 0;
var xComidasComidas;
var coracao;
//fim de jogo
var gameOver = false;
var duracao = 60 * 0.74; //convertido para segundos
var mostra = document.querySelector('.timer');

window.onload = function (){

    iniciaMovimento();
    iniciaContador(duracao, mostra);
    canvas();
    geraLocalDaComida();
    document.addEventListener('keyup',mudaDirecao);
    setInterval(update, 1000/15);
    geraLocalDoObstaculo();
}
function update(){

    if (gameOver){
        return;
    }
    xVidas = 0;
    xComidasComidas = 0;
    geraCanvas();
    geraLinha();
    geraObstaculos();
    geraCabeca();
    aumentaCorpo();
    mostraCoracao();    
    geraSushi();
    mostraComidas();
    mostraPontos();
    colisaoObstaculo();
    colisaoCabeca();
    colisaoComida();
    movimentaGabi();
    rolagemInfinita();
    condiçõesFimJogo();
    
}
function novaImagem(src){
    let img = document.createElement("img");
    img.src = src;
    document.querySelector('#canvas').appendChild(img);
    return img;
}

function canvas(){
    tela = document.getElementById("fundo-jogo");
    tela.width = linhas * tamanhoBloco;
    tela.height = colunas * tamanhoBloco;
    ctx = tela.getContext('2d');
    
}
function geraCanvas(){
    ctx.fillStyle = 'rgb(20, 33, 44)'; // fundo - azul-escuro
    ctx.fillRect(0, 0, tela.width,tela.height); // tela
}
function geraLinha(){
    ctx.strokeStyle = 'aliceblue';
    ctx.lineWidth = 4;
    ctx.beginPath();    
    ctx.moveTo(0, (tamanhoBloco * 2) - 2 );
    ctx.lineTo(tela.width, (tamanhoBloco * 2) - 2);
    ctx.stroke();
}

function geraCabeca(){
    let cabeca =document.getElementById('gabi-cima');
    ctx.drawImage(cabeca, xGabi,yGabi,tamanhoBloco,tamanhoBloco);
}   

function aumentaComidasComidas(){
    if(comidasComidas < 3){
        comidasComidas += 1
    }else if(comidasComidas == 3 && qtdVidas < 5){
        qtdVidas += 1;
        comidasComidas = 0;
    }
    
}

function perdeVida(){
    qtdVidas -= 1
}
function geraLocalDaComida(){
    xSushi = Math.floor(Math.random() * colunas) * tamanhoBloco;
    ySushi = Math.floor(Math.random() * (linhas - 2) + 2) * tamanhoBloco;
}

function geraLocalDoObstaculo(){
    for (let i = 0 ; i < 26 ; i++){
    xObstaculos.push(Math.floor(Math.random() * colunas) * tamanhoBloco);
    yObstaculos.push(Math.floor(Math.random() * (linhas - 2) + 2) * tamanhoBloco);
    }
}

function mudaDirecao(event){
    if (event.code == "KeyW" && yVelocidade != 1){
        xVelocidade = 0 ;
        yVelocidade = -1;
        
    }else if (event.code == "KeyS" && yVelocidade != -1){
        xVelocidade = 0;
        yVelocidade = 1;
        
    }else if (event.code == "KeyA" && xVelocidade != 1){
        xVelocidade = -1 ;
        yVelocidade = 0;
        
    }else if (event.code == "KeyD" && xVelocidade != -1){
        xVelocidade = 1;
        yVelocidade = 0;
        
    }
    
}

function iniciaContador(duracao, mostra){
    var timer = duracao, minutos, segundos;
    
    setInterval(function(){
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);
        
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
           
        mostra.textContent = minutos + ":" + segundos;
        
        if(--timer < 0){
            perdeuJogo()
            timer = duracao;
        }
        
    }, 1000);
}

function iniciaMovimento(){
    
    direcaoInicial = Math.floor(Math.random() * 4 + 1)

    if(direcaoInicial == 1){
        xVelocidade = 0 ;
        yVelocidade = -1;
    }if(direcaoInicial == 2){
        xVelocidade = 0 ;
        yVelocidade = 1;
    }if(direcaoInicial == 3){
        xVelocidade = -1 ;
        yVelocidade = 0;  
    }if(direcaoInicial == 4){
        xVelocidade = 1 ;
        yVelocidade = 0;
    }
} 
//cabeçalho
function mostraComidas(){
    for (let i = 1; i <= comidasComidas; i++) {  
        xComidasComidas += (tamanhoBloco/100) * 10 + tamanhoBloco;
        ctx.drawImage(imgSushi,((tela.width /10) * 5.5) + xComidasComidas, 5, tamanhoBloco, tamanhoBloco);
    }
}
function mostraCoracao(){
    let imagemCoracao = document.getElementById('coracao');
    for (let i = 1; i <= qtdVidas; i++) {
        xVidas += (tamanhoBloco/100) * 70 + tamanhoBloco;
        ctx.drawImage(imagemCoracao, ((tela.width / 10) * 6.5) + xVidas, 7.5, tamanhoBloco * 1.25, tamanhoBloco * 1.25);
    }
}
function mostraPontos(){
    ctx.font = '42px Mirc-font';
    ctx.fillStyle = 'aliceblue';
    ctx.fillText(comidasComidasTotal,15, 36);
}

function rolagemInfinita(){
    if (xGabi < -1){
        xGabi = tela.width - tamanhoBloco;
    }
    if (xGabi  > tela.width - 1 ){
        xGabi = 0 ;
    } 
    if (yGabi < tamanhoBloco * 2){
        yGabi = tela.height - tamanhoBloco;
    } 
    if (yGabi > tela.height - 1){
        yGabi = tamanhoBloco * 2;
    } 
}

function geraSushi(){
    imgSushi = document.getElementById("sushi");
    ctx.drawImage(imgSushi, xSushi, ySushi, tamanhoBloco , tamanhoBloco); //comida
}
function geraObstaculos(){
	let imgObstaculo = novaImagem("../src/images/obstaculos.png");
   // let imgObstaculo = document.getElementById("obstaculos");
    for (let i = 0; i <= xObstaculos.length; i++) {
    ctx.drawImage(imgObstaculo, xObstaculos[i], yObstaculos[i] , tamanhoBloco, tamanhoBloco);    
    }
}
function colisaoComida(){
    if (xGabi == xSushi && yGabi == ySushi){ //Quando comer, add corpo,  muda posição da comida, aumenta contador vida 
            corpoCobra.push([xSushi,ySushi]);
            geraLocalDaComida();
            aumentaComidasComidas();
            comidasComidasTotal += 1
    }
}

function aumentaComidasComidas(){
    if(comidasComidas < 3){
        comidasComidas += 1
    }
    if(comidasComidas == 3 && qtdVidas < 5){
        qtdVidas += 1;
        comidasComidas = 0;
    }
}

function colisaoObstaculo(){
    for (let i = 0; i < yObstaculos.length; i++) {    
        if (xGabi == xObstaculos[i]  && yGabi  == yObstaculos[i]){ 
            perdeVida();    
            yObstaculos.splice(i, 1);
            xObstaculos.splice(i, 1);
        }
        if(comidasComidas == 3 && qtdVidas == 4 ){
            aumentaComidasComidas();
        }
    } 
}

function colisaoCabeca(){
    for (let i = corpoCobra.length - 1 ; i > 0; i --) { //colisao com o corpo
        corpoCobra [i] = corpoCobra[i-1];
    }
    if (corpoCobra.length){
        corpoCobra[0] = [xGabi,yGabi]
    }
}

function movimentaGabi(){
    xGabi += xVelocidade * tamanhoBloco;
    yGabi += yVelocidade  * tamanhoBloco;
}

function aumentaCorpo(){
    corpo = document.getElementById("corpo");
    for (let i = 0; i < corpoCobra.length; i++) { // aumentando corpo da cobra
        ctx.drawImage(corpo, corpoCobra[i][0] , corpoCobra[i][1]  , tamanhoBloco  , tamanhoBloco);    
    }
}
function condiçõesFimJogo(){
    for (let i = 0; i < corpoCobra.length; i++) { // auto-colisao
        if(xGabi == corpoCobra[i][0] && yGabi == corpoCobra[i][1]){ 
            perdeuJogo();
        }
    }
    if(qtdVidas == 0){
        perdeuJogo();
    }
}

function perdeuJogo(){
        gameOver = true;
        alert("Infelizmente você perdeu.");
}
function ganhouJogo(){
    gameOver = true;
    alert("Parabéns!Você ganhou!");
}