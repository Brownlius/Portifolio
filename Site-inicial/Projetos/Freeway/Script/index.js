let tela;
let ctx;
//personagem
tucaRocha = {posicaoX : 50, posicaoY : 25, altura : 64, largura : 64, veloc : 5};
//carros
let ImgCarros = []; 
let carros = [{posicaoX : -200, posicaoY : 134, altura : 160, largura : 140, veloc : 4},
              {posicaoX : -300, posicaoY : 450, altura : 140, largura : 120, veloc : 3},
              {posicaoX : -600, posicaoY : 450, altura : 120, largura : 130, veloc : 4}];




window.onload = function (){
    
    setInterval(update, 1000/150);
    update();
    CarregaImgCarro();
    window.addEventListener('keydown', movimenta);
    
}

function update(){
    geraCanvas();
    imgFundo();
    imgPersonagem();
    imgCarros();
    movimentaCarro();
    ultrapassagem();    
    colisaoComCarro();
    if(carros[1].posicaoX == carros[2].posicaoX){
        console.log(carros[1].posicaoX); 
        console.log(carros[2].posicaoX);
    }
}

function novaImagem(src){
    let img = document.createElement("img");
    img.src = src
    document.querySelector('#canvas').appendChild(img)
    return img
}

function geraCanvas(){
    tela = document.getElementById("canvas");
    ctx = tela.getContext('2d');
    tela.width = 1920/1.5;
    tela.height = 1080/1.5;   
}

function imgFundo(){
    let fundoimg = novaImagem("Imagens/estrada.png");
    ctx.drawImage(fundoimg, 0, 0, tela.width, tela.height);  
}

function imgPersonagem(){
    let personagem = novaImagem("Imagens/personagem.png");
    ctx.drawImage(personagem, tucaRocha.posicaoX, tucaRocha.posicaoY, tucaRocha.altura, tucaRocha.largura);  
}
function CarregaImgCarro(){

    let carro1 = novaImagem("Imagens/car1.png");
    let carro2 = novaImagem("Imagens/car2.png");
    let carro3 = novaImagem("Imagens/car3.png")
    ImgCarros.push(carro1, carro2,carro3);
}   

function imgCarros(){
    for (let i = 0; i < ImgCarros.length; i++) {
        ctx.drawImage(ImgCarros[i], carros[i].posicaoX, carros[i].posicaoY, carros[i].altura, carros[i].largura);
    }
}

function movimentaCarro(){
    for (let i = 0; i < carros.length; i++) {
        carros[i].posicaoX += carros[i].veloc;    
    }
    reiniciaPosicaoCarro()
}

function reiniciaPosicaoCarro(){
    for (let i = 0; i < carros.length; i++) {
    if(carros[i].posicaoX > tela.width + carros[i].largura){
        carros[i].posicaoX = -200;
        }
    }
}
function colisaoComCarro(){
    for (let i = 0; i < carros.length; i++) {
        if(tucaRocha.posicaoX == (carros[i].posicaoX + carros[i].largura) && tucaRocha.posicaoY == (carros[i].posicaoY))
            alert("ai!");
    }
}

function movimenta(e){
    if (e.code == "ArrowUp" ||e.code ==  'KeyW'){
        tucaRocha.posicaoY -= tucaRocha.veloc;
            
        }else if (e.code == "ArrowDown" || e.code ==  'KeyS'){
            tucaRocha.posicaoY += tucaRocha.veloc;
                
        }else if (e.code == "ArrowLeft" || e.code ==  'KeyA'){
            tucaRocha.posicaoX -= tucaRocha.veloc;
                
        }else if (e.code == "ArrowRight" || e.code ==  'KeyD'){
            tucaRocha.posicaoX += tucaRocha.veloc;  
            }
    tucaRocha.x = Math.max(-3, Math.min(tela.width - tucaRocha.largura + 3, tucaRocha.posicaoX));
    tucaRocha.posicaoY = Math.max(0, Math.min(tela.height - tucaRocha.largura, tucaRocha.posicaoY));
}
function ultrapassagem(){ 
    if(carros[2].posicaoX == (carros[1].posicaoX - carros[1].largura) && carros[2].posicaoY == carros[1].posicaoY ){
        while(carros[2].posicaoY < 520 ){ 
            carros[2].posicaoY += 1;
        }
    }else if(carros[2].posicaoX == (carros[1].posicaoX + carros[1].largura + 30)){
        while(carros[2].posicaoY > 450){
            carros[2].posicaoY -= 1; 
        }
    }
}


