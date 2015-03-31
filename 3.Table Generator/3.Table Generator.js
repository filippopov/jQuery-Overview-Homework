(function(){
    var jsonObject,
        inputVal,
        keys;


    $(document).ready(function(){
        $('#btn').on('click',generatingTable)

    })

    function generatingTable(){

        inputVal=$('#input').val();
        jsonObject =JSON.parse(inputVal);
        keys = Object.keys(jsonObject[0]);

        $(document.body).append($('<table>'));
        $('table').append($('<tr>')).css('border','1px solid black');
        for (var i = 0; i < keys.length; i++) {
            ($('<td>')).appendTo($('tr')).text(keys[i]).css('border','1px solid black').css('background-color','red');
        }
        for (var i = 0; i < jsonObject.length; i++) {
            $('<tr>').appendTo($('table')).attr('id',i);
            for (var obj in jsonObject[i]) {
               $('<td>').appendTo($('#'+i)).text(jsonObject[i][obj]).css('border','1px solid black')
            }
        }
        $('#input').val('');
    }
}())
