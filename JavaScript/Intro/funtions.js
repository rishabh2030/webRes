// Functions in javascript

// defination of function
function myFunctions(){
    console .log("my function")
}
// calling our function
myFunctions();

// Creating a function for returning square number
var a = 3;
var ans = square(a);
console.log(ans);
function square(a)
{
    return a * a;
}

// types of Functions 
// anonymous functions
// named function
// arrow function
// IIFE (Immediately invoked function expression)

// anonymous functions
var hello = function (a){
    return a;
}
console.log(hello("risabh"));
// named function
function square(a)
{
    return a * a;
}

// arrow function
var x = 3;
var y = 4;
var a = (x,y)=>{
    return x*y;
}
console.log(a(x,y));

// IIFE
var add = (function(a,b){
    return a+b;
})(x,y);
console.log(add);


