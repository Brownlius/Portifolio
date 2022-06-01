let tela;
let ctx;
//personagem
tucaRocha = {x : 50, y : 25, altura : 64, largura : 64, veloc : 5};
//carros
let ImgCarros = []; 
let carros = [{x : -200, y : 134, altura : 160, largura : 140, veloc : 6.0},
              {x : -300, y : 450, altura : 140, largura : 120, veloc : 3.5},
              {x : -1500, y : 450, altura : 120, largura : 130, veloc : 7.5}];


window.onload = function (){
    
    setInterval(update, 1000/500);
    update();
    CarregaImgCarro();
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
    imgFundo();
    imgPersonagem();
    imgCarros();
    movimentaCarro();
    ultrapassagem()
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
    ctx.drawImage(personagem, tucaRocha.x, tucaRocha.y, tucaRocha.altura, tucaRocha.largura);  
}
function CarregaImgCarro(){

    let carro1 = novaImagem("Imagens/car1.png");
    let carro2 = novaImagem("Imagens/car2.png");
    let carro3 = novaImagem("Imagens/car3.png")
    ImgCarros.push(carro1, carro2,carro3);
}   

function imgCarros(){
    for (let i = 0; i < ImgCarros.length; i++) {
        ctx.drawImage(ImgCarros[i], carros[i].x, carros[i].y, carros[i].altura, carros[i].largura);
    }
}

function movimentaCarro(){
    for (let i = 0; i < carros.length; i++) {
        carros[i].x += carros[i].veloc;    
    }
    reiniciaPosicaoCarro()
}

function reiniciaPosicaoCarro(){
    for (let i = 0; i < carros.length; i++) {
    if(carros[i].x > tela.width + carros[i].largura){
        carros[i].x = -200;
        }
    }
}

function movimenta(e){
    if (e.code == "ArrowUp" ||e.code ==  'KeyW'){
        tucaRocha.y -= tucaRocha.veloc;
            
        }else if (e.code == "ArrowDown" || e.code ==  'KeyS'){
            tucaRocha.y += tucaRocha.veloc;
                
        }else if (e.code == "ArrowLeft" || e.code ==  'KeyA'){
            tucaRocha.x -= tucaRocha.veloc;
                
        }else if (e.code == "ArrowRight" || e.code ==  'KeyD'){
            tucaRocha.x += tucaRocha.veloc;  
            }
    tucaRocha.x = Math.max(-3, Math.min(tela.width - tucaRocha.largura + 3, tucaRocha.x));
    tucaRocha.y = Math.max(0, Math.min(tela.height - tucaRocha.largura, tucaRocha.y));
}
function ultrapassagem(){

    if(carros[2].x == (carros[1].x - carros[1].largura * 1.5)){
        while(carros[2].y < 520 ){ 
            carros[2].y += 5;
        }
        }else if(carros[2].x > carros[1].x * 2){
            do
                carros[2].y -= 5;
            while(carros[2].y > 450)
    }
}
