var character = 200; 
var countChar = 0;
var innerHTML = function(){
    document.getElementById("character").innerHTML = character;
}
window.onload = function (){ 
   innerHTML();
}

$(document).ready(function(){
    console.log($("#character"));
    
    $("#questionInput").keyup(function(){
        var code = event.which;
        if(countChar==0 && code==8){
            console.log("Can't delete");
        }
        else if(countChar==200){
            console.log("Can't input");
        }
        else{
            if(code==8){
                countChar--;
                character++;
            }
            else{
                countChar++;
                character--;
            }
            innerHTML();
            
        }
    })

    $("#questionInput").keydown(function(){
        var code = event.which;
        if(countChar==0 && code==8){
            console.log("Can't delete");
        }
        else if(countChar==200){
            console.log("Can't input");
        }
        else{
            if(code==8){
                countChar--;
                character++;
            }
            else{
                console.log("pressed");
            }
            innerHTML();
            
        }
    })

})
