$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
});

function mostrarImagem() {
    var imagem = document.getElementById("minha-imagem");
    imagem.classList.toggle("visivel");
}

function fecharImagem() {
    var imagem = document.getElementById("minha-imagem");
    if (imagem.style.display === "block") {
        imagem.style.display = "none";
    } else {
        imagem.style.display = "none";
    }
}
