var tamanhoBloco = 25;
var linhas = 20;
var colunas = 20;
var tela;
var ctx;

//cabeça
var xGabi = 5 * tamanhoBloco; 
var yGabi = 5 * tamanhoBloco;
var xVelocidade = 0;
var yVelocidade = 0;
//comida
var xSushi;
var ySushi;

window.onload = function (){
    tela = document.getElementById("fundo-jogo");
    tela.width = linhas * tamanhoBloco;
    tela.height = colunas * tamanhoBloco;
    ctx = tela.getContext('2d');

    colocarComida();
    document.addEventListener('keyup',mudaDirecao);
    setInterval(update, 1000/10);

}

function update(){
    ctx.fillStyle = 'rgb(20, 33, 44)'; // fundo - azul-escuro
    ctx.fillRect(0, 0, tela.width,tela.height);

    ctx.fillStyle = 'aliceblue'; //sushi - branco
    ctx.fillRect(xSushi, ySushi, (tamanhoBloco - 10), (tamanhoBloco - 10));

    if (xGabi == xSushi && yGabi == ySushi){
        colocarComida();
    }

    ctx.fillStyle= 'rgb(24, 214, 119)'; // verde - claro - cabeça
    xGabi += xVelocidade * tamanhoBloco;
    yGabi += yVelocidade  * tamanhoBloco;
    ctx.fillRect(xGabi,yGabi,tamanhoBloco,tamanhoBloco)

    
}

function colocarComida(){
    xSushi = Math.floor(Math.random() * colunas) * tamanhoBloco;
    ySushi = Math.floor(Math.random() * linhas) * tamanhoBloco;

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
