(function(){
   var allImages= 3,
       counter=0;
    $('#img'+counter).css('visibility','visible')
    $('#p'+counter).css('visibility','visible')
    $('#li'+counter).css('background-color','rgba(255,255,255,0.8)')


    $(document).ready(function(){
        $('#left').on('click',changeImgBack);
        $('#right').on('click',changeImg);

        setInterval(function(){
            $('#img'+counter).css('visibility','hidden')
            $('#li'+counter).css('background-color','rgba(0,0,0,0.7)')
            $('#p'+counter).css('visibility','hidden')

            ++counter;
            if(counter>2){
                counter=0;
            }
            $('#img'+counter).css('visibility','visible')
            $('#p'+counter).css('visibility','visible')
            $('#li'+counter).css('background-color','rgba(255,255,255,0.8)')

        }, 5000);

    })

    function changeImg(){
        $('#img'+counter).css('visibility','hidden')
        $('#li'+counter).css('background-color','rgba(0,0,0,0.7)')
        $('#p'+counter).css('visibility','hidden')
        ++counter;
        if(counter>2){
            counter=0;
        }
        $('#img'+counter).css('visibility','visible')
        $('#p'+counter).css('visibility','visible')
        $('#li'+counter).css('background-color','rgba(255,255,255,0.8)')

    }
    function changeImgBack(){
        $('#img'+counter).css('visibility','hidden')
        $('#li'+counter).css('background-color','rgba(0,0,0,0.7)')
        $('#p'+counter).css('visibility','hidden')
        --counter;
        if(counter<0){
            counter=2;
        }
        $('#img'+counter).css('visibility','visible')
        $('#p'+counter).css('visibility','visible')
        $('#li'+counter).css('background-color','rgba(255,255,255,0.8)')

    }

}())
