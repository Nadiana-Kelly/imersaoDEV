var listaFilme = [];
var listaTrailer = [];

function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value;
    
    //função para verificar se a imagem é válida
    function isImagemValida(url) {
        // Lista de extensões de imagem válidas
        var extensoesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
    
        // Verifica se o link termina com uma extensão válida
        return extensoesValidas.some(function(extensao) {
            return url.toLowerCase().endsWith(extensao);
        });
    }

    var trailerFilme = document.getElementById('trailer').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');

    //testo a a URL da imagem 
    if(isImagemValida(filmeFavorito)){
        listaFilme.push(filmeFavorito);
        listaTrailer.push(listaTrailer);
        console.log(filmeFavorito);
        elementoListaFilmes.innerHTML += '<img src="' + filmeFavorito + '" data-trailer="' + trailerFilme + '" onclick="window.location.href=\'' + trailerFilme + '\'">';
    }else{
        alert("Adicione a URL de uma imagem válida.");
    }
    
    // elementoListaFilmes.innerHTML += '<img src="' + filmeFavorito + '" data-trailer="' + trailerFilme + '" onclick="window.location.href=\'' + trailerFilme + '\'">';

    //apaga o preechimento anterior do input
    document.getElementById('filme').value = '';
    document.getElementById('trailer').value = '';
}

//desafio 1: O que acontece se inserir um link que não é um a imagem? Restringir isso.[OK]
//desafio 2: Quando clicar na imagem do filme, ele redireciona para o trailer do youtube [OK]
//desafio 3: Manter uma lista dos filmes adicionados e trailer [OK]