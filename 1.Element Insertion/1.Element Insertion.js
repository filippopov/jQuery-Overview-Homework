(function(){
    $('#wrapper').append($('<p>"Hello"</p>'));
    $('<ul>').appendTo($('#wrapper'));
    $('ul').append($('<li>Hi</li>'));
    $('li').prepend($('<li>"hihi"</li>'));
    $('<p>').prependTo('#wrapper').text('Proba-proba');


}())