function addToCart(){
    alert("Product is added to cart")
}

function add(a,b){
    console.log(a+b);
}
add(100 , 40)
add(300, 40)
add(50 , 40)
add(100 , 40)
add(13 , 50)

// ! function without parameters
function demo(){
    console.log("function without parameters");
}
demo();

// ! function with parameters

function userDetails(name , age , city){
    console.log(name);
    console.log(age);
    console.log(city);
}
userDetails("Yeshwant" , 20 , "Hyderbad");

// //! anonymous function
var add = function(a,b){
    console.log(a+b);
}
add(10,20);
add(100,31);
add(50,12);


// ! IIFE
(function(){
    console.log("IIFE");
})();

//! arrow function
function demo()
{
    console.log("Hello");
}
demo();


var demo=()=>console.log("Arrow function");
demo();

function x(_) {
    console.log("Arrow function1");
    console.log("Hi");
    console.log("Hello");
    console.log("Bye");
}
x();


