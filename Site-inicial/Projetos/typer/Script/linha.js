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

 function inserePlacar(){
    let corpoTabela = $('.tabela').find('tbody');
    let linha = novaLinha();
    $(linha).appendTo(corpoTabela);
    linha.find(".btn-remover").click(excluirLinha);
    scrollPlacar();
    $(".container-placar").slideDown(400);
    
}

function scrollPlacar(){
    let topoPlacar = $(".container-placar").offset().top;
   
    $(".container-corpo").animate(
    {
        scrollTop: topoPlacar + "px"

    },500);
}
 
 function excluirLinha(event){
     event.preventDefault();
     let linha = $(this).parent().parent();
     linha.fadeOut(500);
     setTimeout(function(){

        linha.remove();

     },500);
 }