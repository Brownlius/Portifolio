let tela;
let ctx;
//personagem
tucaRocha = {x : 50, y : 25, altura : 64, largura : 64, veloc : 5};


window.onload = function (){
    
    setInterval(update, 1000/1000);
    update();
    window.addEventListener('keydown', movimenta);
    
    
}

function novaImagem(src){
    let img = document.createElement("img");
    img.src = src
    document.querySelector('#canvas').appendChild(img)
    return img
}

function update(){
    geraCanvas();
    fundo();
    colisaoBorda();
    personagem();
    console.log(tucaRocha.x)
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
    if(tucaRocha.x > 0 && tucaRocha.x < tela.width){
            
        
        if (event.code == "ArrowUp"){
            tucaRocha.y -= tucaRocha.veloc;
            
        }else if (event.code == "ArrowDown"){
            tucaRocha.y += tucaRocha.veloc;
            
        }else if (event.code == "ArrowLeft"){
            tucaRocha.x -= tucaRocha.veloc;
            
        }else if (event.code == "ArrowRight"){
            tucaRocha.x += tucaRocha.veloc;
            
        }
    }
}

function colisaoBorda(){
    
}
