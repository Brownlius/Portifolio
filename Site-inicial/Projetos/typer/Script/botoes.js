function reiniciarCampos(){
    campoTexto.attr('disabled',false);
    campoTexto.val("");
    $(".contador_palavras-campo_digitacao").html(0);
    $(".contador_caracteres-campo_digitacao").html(0); 
    $('.cronometro-frase').text(tempoinicialCronometro);
    campoTexto.removeClass("borda-certa");
    campoTexto.removeClass("borda-errada")
}

$('.placar').click(exibePlacar);

function exibePlacar(){
    $(".container-placar").toggle(400);
 }
