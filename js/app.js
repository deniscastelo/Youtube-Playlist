//var url = chrome.extension.getURL('toolbar.html');
//var height = '37px';
//var iframe = "<iframe src='" + url +"' id='ytpldenislima' style='height:"+ height +"'></iframe>";
var btnYPL = "<button type='button' class='ytpldenislima-btn'>+</button>";

//$('html').append(iframe);

//$('.yt-uix-sessionlink').before(btnYPL);
$('.yt-lockup-thumbnail.contains-addto').append(btnYPL);
$('.thumb-wrapper').after(btnYPL);

/*$('body').css({
    '-webkit-transform': 'translateY('+height+')'
});*/

//document.getElementById('teste')
