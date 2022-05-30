let tela;
let ctx;
let xVelocidade;
let yVelocidade;
//personagem
xTucaRocha = 50;
yTucaRocha = 25;

window.onload = function (){
    update();
    document.addEventListener('keydown',mudaDirecao);
}

function novaImagem(src){
    var img = new Image();
    img.src = src;
    return img
}

function update(){

    geraCanvas();
    fundo();
    personagem();
    movimenta();
    
    
    
}

function geraCanvas(){
    tela = document.getElementById("canvas");
    ctx = tela.getContext('2d');
    tela.width = 1920/1.5;
    tela.height = 1080/1.5;   
}

function fundo(){
    let fundoimg = novaImagem("Imagens/estrada.png");
    ctx.drawImage(fundoimg, 0, 0, tela.width, tela.height);  
}

function personagem(){
    let personagem = novaImagem("Imagens/personagem.png");
    ctx.drawImage(personagem, xTucaRocha, yTucaRocha, 64, 64);  
}

function movimenta(){
    xTucaRocha += xVelocidade; 
    yTucaRocha += yVelocidade; 
}

function mudaDirecao(event){
    if (event.code == "ArrowUp"){
        xVelocidade = 0 ;
        yVelocidade = -1;
        
    }else if (event.code == "ArrowDown"){
        xVelocidade = 0;
        yVelocidade = 1;
        
    }else if (event.code == "ArrowLeft"){
        xVelocidade = -1 ;
        yVelocidade = 0;
        
    }else if (event.code == "ArrowRight"){
        xVelocidade = 1;
        yVelocidade = 0;
        
    }
}
