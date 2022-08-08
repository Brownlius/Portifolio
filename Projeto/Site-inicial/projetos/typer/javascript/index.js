let tempoinicialCronometro = $('.cronometro-frase').text();
let campoTexto = $('.campo_digitacao');

$(function () { 
    contaPalavrasFrase();

    campoTexto.on('input', function(){
        contaPalavrasInput();
        contaCaracteresInput();
    });

    campoTexto.one('input', cronometro);
    campoTexto.on('input', ConfereDigitacao);
    $(".btn-reiniciar").click(reiniciarCampos);

});

function ConfereDigitacao(){
    let frase = $('.frase').text();
    let digitado = campoTexto.val();
    let fraseAComparar = frase.substr(0, digitado.length);

    if(digitado == fraseAComparar){
        campoTexto.addClass("borda-certa");
        campoTexto.removeClass("borda-errada");
    }else{
        campoTexto.addClass("borda-errada");
        campoTexto.removeClass("borda-certa");
    }
}

function cronometro(){
    let cronometroCampo = $('.cronometro-frase');
    let cronometroValor = cronometroCampo.text();
    
    $('.btn-reiniciar').attr('disabled', true);

    var cronometroID = setInterval(function(){
        
        cronometroValor--;
        cronometroCampo.html(cronometroValor);

         if(cronometroValor < 1){
            clearInterval(cronometroID);
            finalizaJogo();
            inserePlacar();
        }
    }, 1000);
}

    function finalizaJogo(){
        campoTexto.attr('disabled',true);  
        $(".btn-reiniciar").attr("disabled",false) 
    }


