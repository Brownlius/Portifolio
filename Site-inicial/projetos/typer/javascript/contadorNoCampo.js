
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