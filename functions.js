/*function addToCart(){
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

//! return keyword
function demo(a,b){
    return a+b;    //!explicit return
};
let x = demo(5,5);
console.log(x);

let y = (a,b) => a+b; //!implicit return
leta = y(10,20);
console.log(a);

let z = (a,b)=>{return a+b}; //!explicit return
letb = z(10,100);
console.log(b);

//! Higher order function

function hof(a){
    return a;
};
let x = hof(10);
console.log(x);


function parent(callback){
    return callback;
}
let x = parent(add(5,5));
console.log(x);

functionadd(a,b); //!callback
    return a+b
}


//! closure
var a =100;
let b ="hi"
function x(){
    var user = "Vinay";
    let company = "Google";
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a,b);;
    
};
x();

function x(){
    let a = 10;
    const b = 20;
    console.log(a,b);
    function y() {
        let p='js'
        var q ='reactjs';
        console.log(p,q);
        function z() {
            let username='Ram'
            console.log(a);
            console.log(q);
        }
        z();
    }
    y();
}
x();*/
