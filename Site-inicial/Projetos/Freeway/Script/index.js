let tela;
let ctx;
//personagem
let michael = {posicaoX : 600, inicialX: 600, inicialY : 25, posicaoY : 25, altura : 64, largura : 64, veloc : 4};
let vidas ={qtd : 5, posicaoX : 5, posicaoY : 0, altura : 25, largura : 25};
//carros
let ImgCarros = []; 
let carros = [{posicaoX : -200, posicaoY : 134, altura : 160, largura : 140, veloc : 6},
              {posicaoX : -300, posicaoY : 450, altura : 140, largura : 120, veloc : 4},
              {posicaoX : -600, posicaoY : 450, altura : 120, largura : 140, veloc : 8}];


window.onload = function (){
    
    setInterval(update, 1000/150);
    update();
    CarregaImgCarro();
    window.addEventListener('keydown', movimenta);
    
}

function update(){
    geraCanvas();
    imgFundo();
    mostraVida();
    imgPersonagem();
    imgCarros();
    movimentaCarro();
    ultrapassagem();    
    colisaoComCarro();
    // console.log(michael.posicaoY);
    // console.log(carros[0].posicaoY)
  
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

function mostraVida(){
    let ImgVidas = novaImagem("Imagens/vida.png")
    let deslocamento = 0;
    for (let i = 1; i <= vidas.qtd; i++) {
        ctx.drawImage(ImgVidas,(vidas.posicaoX + deslocamento),vidas.posicaoY,vidas.altura,vidas.largura);
        deslocamento += 30;
}   
    }

function imgPersonagem(){
    let personagem = novaImagem("Imagens/personagem.png");
    ctx.drawImage(personagem, michael.posicaoX, michael.posicaoY, michael.altura, michael.largura);  
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
function perdeVida(){
    vidas.qtd--
}
function colisaoComCarro(){
    for (let i = 0; i < carros.length; i++) {
        if(michael.x >= carros[i].posicaoX && michael.posicaoX <= carros[i].posicaoX + carros[i].largura &&
             michael.posicaoY >= carros[i].posicaoY && michael.posicaoY <= (carros[i].posicaoY + carros[i].altura)){
                michael.posicaoX = michael.inicialX;
                michael.posicaoY = michael.inicialY;
                perdeVida();
            }   

    }
}


function movimenta(e){
    if (e.code == "ArrowUp" ||e.code ==  'KeyW'){
        michael.posicaoY -= michael.veloc;
            
        }else if (e.code == "ArrowDown" || e.code ==  'KeyS'){
            michael.posicaoY += michael.veloc;
                
        }else if (e.code == "ArrowLeft" || e.code ==  'KeyA'){
            michael.posicaoX -= michael.veloc;
                
        }else if (e.code == "ArrowRight" || e.code ==  'KeyD'){
            michael.posicaoX += michael.veloc;  
            }
    michael.x = Math.max(-3, Math.min(tela.width - michael.largura + 3, michael.posicaoX));
    michael.posicaoY = Math.max(0, Math.min(tela.height - michael.largura, michael.posicaoY));
}
function ultrapassagem(){ 
    if(carros[2].posicaoX  == carros[1].posicaoX - carros[1].largura){
        while(carros[2].posicaoY < 520 ){ 
            carros[2].posicaoY += 1;
        }
    }else if(carros[2].posicaoX == (carros[1].posicaoX + carros[1].largura)){
        while(carros[2].posicaoY > 450){
            carros[2].posicaoY -= 1; 
        }
    }
}


