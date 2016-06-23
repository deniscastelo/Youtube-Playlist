// Classe para chamar o Json.
function Lista(){
    this.yt_link;
    this.yt_title;
    this.yt_thumbnail;
}

function json(){
	var qtd;
	var retorno;
    var lista = new Lista();
    var operacao = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionado = -1; //Índice do item selecionado na lista
	var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
	tbClientes = JSON.parse(tbClientes); // Converte string para objeto
	if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];

	// Resgatar valores.

    json.prototype.addList = function(link, title, thumbnail){
		//$('#resultado').html('Carregando dados...');

        //alert('add');

        lista.yt_link = link;
        lista.yt_title = title;
        lista.yt_thumbnail = thumbnail;

		// JSON string
        var str_add = JSON.stringify(lista);

        tbClientes.push(str_add);
        localStorage.setItem('playlist', JSON.stringify(tbClientes));
	}

    json.prototype.getItemFromList = function(){
		//$('#resultado').html('Carregando dados...');

        playlist = localStorage.getItem('playlist');

        var ytpl = JSON.parse(playlist);
        //tbClientes[0].yt_link
        alert(tbClientes[0].yt_link);
	}

}

// Objeto.
var obj = new json();

$(document).ready(function(){
    $('button.ytpldenislima-btn').on("click", function(e){

        var link = $(this).parents('.yt-lockup').find('.yt-lockup-title a').attr('href');
        var title = $(this).parents('.yt-lockup').find('.yt-lockup-title a').attr('title');
        var thumbnail = $(this).parents('.yt-lockup').find('.yt-thumb-simple img').attr('src');

        alert(link + "\n" +
              title + "\n" +
              thumbnail);

        obj.addList(link,title,thumbnail);

    });

    /*$(document).bind('DOMSubtreeModified', function () {

        //...

    });*/

});










