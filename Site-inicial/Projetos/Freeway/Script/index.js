let tela;
let ctx;
window.onload = function (){
    geraCanvas();
    update();
    
}
function fundo(){
    
    let fundoimg = new Image();
    fundoimg.src = "Imagens/estrada.png";
    ctx.drawImage(fundoimg, 0, 0, tela.width, tela.height);  
}

function geraCanvas(){
    tela = document.getElementById("canvas");
    ctx = tela.getContext("2d");
    tela.width = 1920/1.5;
    tela.height = 1080/1.5;
}

function update(){
    fundo();
}

