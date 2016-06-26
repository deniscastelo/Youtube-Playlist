

$(document).ready(function(){

    var ytpl_title = 'Youtube Playlist BETA';

    ListarVideos();

    function ListarVideos() {



        chrome.storage.sync.get("pl", function (d){

        //$("#yt-playlist-table").html("");

            var lista = JSON.parse(d.pl);

            var itens = "";

            itens = "<ul>";

            console.log(ytpl_title + ': ' +lista.toString());

            for(var i in lista){
                console.log(i);

                var cli = JSON.parse(lista[i]);



                itens += "<li>";
                itens += "<img class='del' src='../../icons/delete.png'/ alt='" + i + "'>";
                itens += "<a href='" + "https://www.youtube.com" + cli.link + "'></a>";
                itens += "<img src='" + cli.thumbnail + "'/>";
                itens += "<h3>" + cli.title + "</h3>";
                itens += "</li>";


            }

                itens += "</ul>";

            $("#yt-playlist-table").html(itens);

        });

    }

    function DeleteVideo(indice){

        chrome.storage.sync.get("pl", function (d){

            var lista = JSON.parse(d.pl);

            lista.splice(indice, 1);

            chrome.storage.sync.set({"pl": JSON.stringify(lista)});

            console.log(ytpl_title + ': excluido o video: ' + indice);

        })
    }

    $('body').on('click','.del',function(){
        console.log('deletendo video...');
        indice_selecionado = parseInt($(this).attr("alt"));
        DeleteVideo(indice_selecionado);
        ListarVideos();
    })

    $("#yt-btn-clear").on('click', function(){
        chrome.storage.sync.clear()
    });

});
