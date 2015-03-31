(function(){
    $(document).ready(function(){
        $('#btn').on('click',setColor);
    })

    function setColor(){
        var classValue=$('#input-class').val();
        var colorValue=$('#input-color').val();
        $('.'+classValue).css('background-color',colorValue);
        $('#input-class').val('');
    }
}())
