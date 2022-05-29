let tela;
let ctx;
let fundoimg = new Image();

window.onload = function (){
    geraCanvas();
    update();
    fundo();
}
function fundo(){
    fundoimg.src = "Site-inicial/Projetos/FreeWay 2.0/Imagens/estrada.png";
    ctx.drawImage(fundoimg, 0, 0);  
}

function geraCanvas(){
    tela = document.getElementById("canvas");
    tela.width = 1920/1.5;
    tela.height = 1080/1.5;
    ctx = tela.getContext("2d");
}

function update(){
    // desenhaCanvas();
    
}

// function desenhaCanvas(){
//     ctx.fillStyle = "black";
//     ctx.fillRect(0,0, tela.width, tela.height);

// }

