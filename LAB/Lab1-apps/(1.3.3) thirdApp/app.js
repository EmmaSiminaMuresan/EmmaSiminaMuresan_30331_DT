var counter = 0;
var decrement = 10;
 function printValue(divId, value){
 document.getElementById(divId).innerHTML = value;
 }
	printValue("counter", 0);

	document.getElementById("inc").addEventListener("click",increment);
function increment(){
	counter++;
	if(counter>10)
	printValue("counter","stop");
	else
	printValue("counter", counter);
}
printValue("decrement", 10);

	document.getElementById("dec").addEventListener("click",decrementf);

function decrementf(){
	decrement--;
	printValue("decrement",decrement);
	if(decrement<0)
	printValue("decrement","stop");
	else
	printValue("decrement", decrement);
}