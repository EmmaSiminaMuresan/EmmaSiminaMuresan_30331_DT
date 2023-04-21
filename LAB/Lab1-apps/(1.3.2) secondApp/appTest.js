var bool_var = true;
var string_var = "variabila";


function test(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="n is undefined"?"Passed":"Failed");
 
 console.log(sum(bool_var)=="not a number"?"PASSED":"FAILED");
 console.log(sum(string_var)=="not a number"?"PASSED":"FAILED");
}
 test ();
 
(function(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="invalid argument"?"Passed":"Failed");
 })();
 
 console.log("reapelare test");
 test ();
 
 function fibonacci(){
    console.log(getFibonacci(2));
    console.log(getFibonacci(5));
    console.log(getFibonacci());
    console.log(getFibonacci(true));
    console.log(getFibonacci(0));
    console.log(getFibonacci(11));
 }
 fibonacci();