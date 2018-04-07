$(document).ready(()=>{
    var $number1 = $('#number1');
    var number1 = 0;
    
    //Throttle
    var handleScroll1 = throttle(()=>{
        number1 += 1;
        $number1.html(number1);
    },200);
    $('#style-1').on("scroll",handleScroll1)
    
    //Debounce
    var $number2 = $('#number2');
    var number2 = 0;
    var handleScroll2 = debounce(()=>{
        number2 += 1;
        $number2.html(number2);
    },200);
    $('#style-2').on("scroll",handleScroll2)
})

function debounce(func, wait) {
    var timeout;
    return ()=> {
        const context = this, args = arguments;
        var executeFunction = () => {
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
};
const throttle = (func, limit) => {
    let check
    return function() {
        const args = arguments, context = this;
        if (!check) {
            func.apply(context, args)
            check = true
            setTimeout(() => check = false, limit)
        }
    }
}