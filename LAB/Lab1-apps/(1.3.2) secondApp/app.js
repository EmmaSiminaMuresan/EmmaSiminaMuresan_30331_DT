document.getElementById("n").addEventListener('input',inputSum );

 function inputSum(){
	var inputNumber = parseInt(document.getElementById("n").value );
	
	console.log(sum( inputNumber ));
	console.log(getFibonacci(inputNumber))
}

 function sum(n){
	if (typeof n === 'undefined') return "n is undefined ";
	if (typeof n != 'number') return "not a number";
	
	var sum = 0;
	for(var i=1;i<=n;i++){
		sum+=i;
	}
	return sum;
 }

 function getFibonacci(n){
	if(typeof n == 'undefined' || typeof n != 'number') return "not allowed";
	if(n<1 || n>10) return "not allowed";

	var array = [],cont = 2,suma = 0;

	array.push(1);
	array.push(1);
	

	while(cont<n){
		suma = array[cont-1] + array[cont-2];
		array.push(suma);
		cont++;
	}
	return array;
 }