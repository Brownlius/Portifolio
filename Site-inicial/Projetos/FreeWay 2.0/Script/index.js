let tela;
let ctx;

window.onload = function (){
    geraCanvas();
    update();
}

function geraCanvas(){
    tela = document.getElementById("canvas");
    tela.width = 1920/1.5;
    tela.height = 1080/1.5;
    ctx = tela.getContext("2d");
}

function update(){
    desenhaCanvas();
}

function desenhaCanvas(){
    
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, tela.width, tela.height);

}

