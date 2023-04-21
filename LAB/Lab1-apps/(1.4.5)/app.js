var first = parseFloat(document.getElementById("firstNumber").value);
var second = parseFloat(document.getElementById("secondNumber").value);

function printValue(divId,value){
    document.getElementById(divId).innerHTML = value;
}



ducument.getElementById("add").addEventListener("click",additon(first,second));
function additon(x,y){
    ducument.getElementById("equal").addEventListener("click",printValue("result",x+y));
}

document.getElementById("sub").addEventListener("click",substraction(first,second));
function substraction(x,y){
    ducument.getElementById("equal").addEventListener("click",printValue("result",x-y));
}

ducument.getElementById("mult").addEventListener("click",multiplication(first,second));
function multiplication(x,y){
    ducument.getElementById("equal").addEventListener("click",printValue("result",x*y));
}

document.getElementById("div").addEventListener("click",division(first,second));
function division(x,y){
    ducument.getElementById("equal").addEventListener("click",printValue("result",x/y));
}