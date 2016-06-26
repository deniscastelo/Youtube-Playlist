$(document).ready(function(){

    GetKey();

    function GetKey() {



        chrome.storage.sync.get("pl", function (d){

            var lista = JSON.parse(d.pl);

            var itens = "";

            itens = "<ul>";

            console.log(lista.toString());

            for(var i in lista){
                console.log(i);

                var cli = JSON.parse(lista[i]);

                itens += "<li>";
                itens += "<a href='" + "https://www.youtube.com" + cli.link + "'></a>";
                itens += "<img src='" + cli.thumbnail + "'/>";
                itens += "<h3>" + cli.title + "</h3>";
                itens += "</li>";


            }

                itens += "</ul>";

            $("#yt-playlist-table").html(itens);

        });

    }

    $("#yt-btn-run").on('click', function(){

    });

    $("#yt-btn-clear").on('click', function(){
        chrome.storage.sync.clear()
    });

});
