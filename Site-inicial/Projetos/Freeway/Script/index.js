let tela;
let ctx;
//personagem
tucaRocha = {x : 50, y : 25, altura : 64, largura : 64, velocidade : 5};


window.onload = function (){
    
    setInterval(update, 1000/1000);
    update();
    window.addEventListener('keydown', movimenta);
    
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
    ctx.drawImage(personagem, tucaRocha.x, tucaRocha.y, tucaRocha.altura, tucaRocha.largura);  
}

function movimenta(event){
    if (event.code == "ArrowUp"){
        tucaRocha.y -= tucaRocha.velocidade;
        
    }else if (event.code == "ArrowDown"){
        tucaRocha.y += tucaRocha.velocidade;
        
    }else if (event.code == "ArrowLeft"){
        tucaRocha.x -= tucaRocha.velocidade;
        
    }else if (event.code == "ArrowRight"){
        tucaRocha.x += tucaRocha.velocidade;
        
    }
}
