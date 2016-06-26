$(function(){


    function Adicionar(link, title, thumbnail){

        chrome.storage.sync.get("pl", function (d){

            var lista = JSON.parse(d.pl);

            var newVideo = JSON.stringify({
                link: link,
                title: title,
                thumbnail: thumbnail
            });

            lista.push(newVideo);

            chrome.storage.sync.set({"pl": JSON.stringify(lista)});

            console.log("registro adicionado!");

        });


    }

    function GetKey(key) {

        chrome.storage.sync.get("pl", function (data){
            dados.push(data.pl);
        })

    }

    function GetVideo(propriedade, valor){
        var cli = null;
        for (var item in tbClientes) {
            var i = JSON.parse(tbClientes[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
    }

    $('button.ytpldenislima-btn').on("click", function(e){

        var link = $(this).parents('.yt-lockup').find('.yt-lockup-title a').attr('href');
        var title = $(this).parents('.yt-lockup').find('.yt-lockup-title a').attr('title');
        var thumbnail = $(this).parents('.yt-lockup').find('.yt-thumb-simple img').attr('src');

        alert(link + "\n" +
            title + "\n" +
            thumbnail);

        Adicionar(link,title,thumbnail);

    });

});









