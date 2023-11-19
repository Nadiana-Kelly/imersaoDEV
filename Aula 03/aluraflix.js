//desafio 1: Trocar 'for' por 'while'
//desafio 2: garantir que o final da imagem seja .jpg 
//desafio 3: criar uma lista para guardar os nomes dos filmes e esses nomes aparecer em baixo dos pôsteres

function adicionarFilme(){
    urlFilme=document.getElementById("urlFilme").value;
    nomeFilme=document.getElementById("nomeFilme").value;
    for(var i=0;i<listaFilmesAtualizado.length;i++){
        if(listaFilmesAtualizado[i]==urlFilme){
            alert("Filme já adcionado anteriormente.");
            return;
        }
    }
    listaFilmesAtualizado.push(document.getElementById("urlFilme").value);
    listaNomesAtualizado.push(document.getElementById("nomeFilme").value);
    
    desenharFilmes();
}

function filtrarLinksJpg(listaFilmes, listaNomes) {
    var nomeAtualizado = [];
    var linksAtualizado = [];

    for (var i=0;i<listaFilmes.length; i++){
        if(listaFilmes[i].match(/\.jpg$/i)){
            nomeAtualizado.push(listaNomes[i]);
            linksAtualizado.push(listaFilmes[i]);
        }
    }
    return { links: linksAtualizado, nomes: nomeAtualizado };
}

var listaFilmes = ["https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/91/37/92/20142319.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/91/21/92/20135014.jpg"];
var listaNomes = ["Orgulho e Preconceito", "Ritmo Quente", "Diário de uma Paixão"];


var resultadosFiltrados = filtrarLinksJpg(listaFilmes, listaNomes);
var listaFilmesAtualizado = resultadosFiltrados.links; 
var listaNomesAtualizado = resultadosFiltrados.nomes; 

function desenharFilmes(){
    document.getElementById("desenhaBanner").innerHTML='';
    var listaTags = [];
    var y = 0;
    while(y<listaFilmesAtualizado.length){
        listaTags.push(`<div>
        <img src='${listaFilmesAtualizado[y]}'>
        <p> ${listaNomesAtualizado[y]} </p>
        </div>`)
        y++
    }
    var html = '';
    for(var p=0;p<listaTags.length;p++){
        html = html + listaTags[p];
    }
    document.getElementById("desenhaBanner").innerHTML=html;
}
desenharFilmes();