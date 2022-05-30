let tela;
let ctx;

window.onload = function (){
    update();
}

function novaImagem(src){
    var imagem = new Image();
    imagem.src = src;
    return imagem
}

function update(){

    geraCanvas();
    fundo();
}

function geraCanvas(){
    tela = document.getElementById("canvas");
    ctx = tela.getContext("2d");
    tela.width = 1920/1.5;
    tela.height = 1080/1.5;   
}

function fundo(){
    let fundoimg = novaImagem("Imagens/estrada.png");
    ctx.drawImage(fundoimg, 0, 0, tela.width, tela.height);  
}




