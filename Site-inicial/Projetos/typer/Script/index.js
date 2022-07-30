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

function contaPalavrasFrase(){

    let frase = $('.frase').text();
    let frasedividida = frase.split(/\S+/);
    let qtdPalavras = frasedividida.length - 1;
    mudaContadorPalavrasFrase(qtdPalavras);
}
    function mudaContadorPalavrasFrase(qtdPalavras){

        $('.contador_palavras-frase').text(qtdPalavras);
    }

function contaPalavrasInput(){   

    let conteudoCampoTexto = campoTexto.val();
    let qtdPalavras = conteudoCampoTexto.split(/\S+/).length - 1;    
    mudaContadorPalavrasinput(qtdPalavras);
}
    function mudaContadorPalavrasinput(qtdPalavras){

        $(".contador_palavras-campo_digitacao").html(qtdPalavras);
    }

function contaCaracteresInput(){
    let conteudoCampoTexto = campoTexto.val();
    qtdCaracteresCampoTexto = conteudoCampoTexto.length;
    mudaContadorCaracteresInput(qtdCaracteresCampoTexto);
}
    function mudaContadorCaracteresInput(qtdCaracteresCampoTexto){

        $('.contador_caracteres-campo_digitacao').html(qtdCaracteresCampoTexto);
    }

function reiniciarCampos(){
    campoTexto.attr('disabled',false);
    campoTexto.val("");
    $(".contador_palavras-campo_digitacao").html(0);
    $(".contador_caracteres-campo_digitacao").html(0); 
    $('.cronometro-frase').text(tempoinicialCronometro);
    campoTexto.removeClass("borda-certa");
    campoTexto.removeClass("borda-errada")

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

function inserePlacar(){
    let corpoTabela = $('.tabela').find('tbody');
    let linha = novaLinha();
    $(linha).appendTo(corpoTabela);
    linha.find(".btn-remover").click(excluirLinha);

}
function novaLinha(){
   let qtdPalavrasPlacar = $('.contador_palavras-campo_digitacao').text();
   var user = "Pedro";

   let linha = $("<tr>");  
   let colunaNome  =  $("<td>").html(user);
   let colunaPalavras  =  $("<td>").html(qtdPalavrasPlacar);
   let colunabtnRemove = $("<td>");
   let LinkRemover = $("<a>").addClass("btn-remover").attr("href","#");
   let iconeBtnRemover = $("<i>").addClass("material-icons icones").html("remove_circle");
   
   LinkRemover.append(iconeBtnRemover);

   colunabtnRemove.append(LinkRemover);
   linha.append(colunaNome);
   linha.append(colunaPalavras);
   linha.append(colunabtnRemove);
   return linha;
};

function excluirLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}