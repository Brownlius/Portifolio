var tamanhoBloco = 20;
var linhas = 30;
var colunas = 30;
var tela;
var ctx;
//cabeça
var xGabi = 5 * tamanhoBloco; 
var yGabi = 5 * tamanhoBloco;
var xVelocidade = 0;
var yVelocidade = 0;
//corpo
var corpoCobra = [];
//comida
var xSushi;
var ySushi;
// Obstaculos
var xObstaculos = [];
var yObstaculos = [];
//Marca pontos
var vidas= 5;
var comidasComidas = 0;
var comidasComidasTotal = 0;
//fim de jogo
var gameOver = false;
    var duracao = 60 * 2.99; //convertido para segundos
    var mostra = document.querySelector('.timer');
    
window.onload = function (){
    iniciaContador(duracao, mostra);
    tela = document.getElementById("fundo-jogo");
    tela.width = linhas * tamanhoBloco;
    tela.height = colunas * tamanhoBloco;
    ctx = tela.getContext('2d');
    colocarComida();
    document.addEventListener('keyup',mudaDirecao);
    setInterval(update, 1000/15);
    colocarObstaculo();
    
}
function update(){
    console.log(vidas);
    if (gameOver){
        return;
    }

    ctx.fillStyle = 'rgb(20, 33, 44)'; // fundo - azul-escuro
    ctx.fillRect(0, 0, tela.width,tela.height); // tela

    ctx.fillStyle = 'aliceblue'; //sushi - branco
    ctx.fillRect(xSushi, ySushi, (tamanhoBloco * 0.75), (tamanhoBloco * 0.75)); //comida
    
    for (let i = 0; i <= xObstaculos.length; i++) {
        ctx.fillStyle = 'rgb(138,118,138)'; // Gera o obstaculo
        ctx.fillRect(xObstaculos[i], yObstaculos[i] , tamanhoBloco, tamanhoBloco);
        
    }
    

    if (xGabi == xSushi && yGabi == ySushi){ //Quando comer, add corpo,  muda posição da comida, aumenta contador vida 
            corpoCobra.push([xSushi,ySushi]);
            colocarComida();
            aumentaComidasComidas();
            comidasComidasTotal += 1
  
    }
    for (let i = 0; i < yObstaculos.length; i++) {    
    if (xGabi == xObstaculos[i]  && yGabi  == yObstaculos[i]){ //Colisao com obstaculo. Atualiza local, e perde vida
        perdeVida();
        apagarObstaculo();
    }
    }  

    for (let i = corpoCobra.length - 1 ; i > 0; i --) { //colisao com o corpo
        corpoCobra [i] = corpoCobra[i-1];
    }
    if (corpoCobra.length){
        corpoCobra[0] = [xGabi,yGabi]
    }
    ctx.fillStyle= 'rgb(24, 214, 119)'; // verde - claro - cabeça
    ctx.fillRect(xGabi,yGabi,tamanhoBloco,tamanhoBloco)
    xGabi += xVelocidade * tamanhoBloco;
    yGabi += yVelocidade  * tamanhoBloco;

    for (let i = 0; i < corpoCobra.length; i++) { // aumentando corpo da cobra
        ctx.fillRect(corpoCobra[i][0] , corpoCobra[i][1]  , tamanhoBloco  , tamanhoBloco)        
    }
    //Rolagem infinita
    if (xGabi < -1){
        xGabi = tela.width - tamanhoBloco;
    }
    if (xGabi  > tela.width - 1 ){
        xGabi = 0 ;
    } 
    if (yGabi < -1){
        yGabi = tela.height - tamanhoBloco;
    } 
    if (yGabi > tela.height - 1){
        yGabi = 0 ;
    } 
//Condições para fim do jogo
    
    for (let i = 0; i < corpoCobra.length; i++) { // auto-colisao
        if(xGabi == corpoCobra[i][0] && yGabi == corpoCobra[i][1]){ 
        gameOver = true;
        alert("Fim de jogo");
        }
    } 
    if(vidas == 0 || comidasComidasTotal == 15){
        gameOver = true;
        alert("Fim de jogo");
    }
    
}
function aumentaComidasComidas(){
    if(comidasComidas < 3 && vidas < 5){
        comidasComidas += 1
    }else if(comidasComidas == 3 && vidas < 5){
        vidas +=1;
        comidasComidas = 0;
    }
}
function perdeVida(){
    vidas = vidas - 1
}
function colocarComida(){
    xSushi = Math.floor(Math.random() * colunas) * tamanhoBloco;
    ySushi = Math.floor(Math.random() * linhas) * tamanhoBloco;
    
}

function mudaDirecao(event){
    if (event.code == "ArrowUp" && yVelocidade != 1){
        xVelocidade = 0 ;
        yVelocidade = -1;
    }else if (event.code == "ArrowDown" && yVelocidade != -1){
        xVelocidade = 0;
        yVelocidade = 1;
    }else if (event.code == "ArrowLeft" && xVelocidade != 1){
        xVelocidade = -1 ;
        yVelocidade = 0;
    }else if (event.code == "ArrowRight" && xVelocidade != -1){
        xVelocidade = 1;
        yVelocidade = 0;
    }
}

function colocarObstaculo(){
    for (let i = 0 ; i < 10 ; i++){
    xObstaculos.push(Math.floor(Math.random() * colunas) * tamanhoBloco);
    yObstaculos.push(Math.floor(Math.random() * colunas) * tamanhoBloco);
    }
}

function apagarObstaculo(){
    xObstaculos.slice(0);
    yObstaculos.slice(0);
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
            timer = duracao;
        }
    }, 1000);
}
