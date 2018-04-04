var character = 200;

$(document).ready(function(){
    $('#questionInput').keyup(()=>{
        var $c = $('#character');
        $c.html(character-$('#questionInput').val().length);
    });
    
})