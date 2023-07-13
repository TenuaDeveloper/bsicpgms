const cart = ["Shore","Pant","Pencil","Pen"]

// api.createOrder()
// api.proceedPayment()

// function x(){
//     var i = 7

//     function y(){
//         console.log(i)
//     }
// y()
// }
// x()
//Here the y function returns the function x and x will bind its lexical scope with it and it forms closure 
//By the line no 26 x no longer exists but if we will call z it will give value of a due to the closures
function x(){

var a = 9

 return function x(){
    console.log(a)
 }

}
const z = x()
console.log(z)
console.log(z())
//Exaple of closures with setTimeout
//problem: Below wee will get the same i because whenever setTimeout will take this call back and attach timer to it
//and store in the memory with refrence of i So each time when loop will iterate it will refer the same i because wee are using the 
//var keyword to declare the variable and its a function scope
function closureEx(){
   for(var i = 0 ; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
   }

}
closureEx()

//Output will be: 5,5,5,5,5,5
//Solution 1: We can use let to create i then it will take new i altogether so when loop will iterate it will take each time new 
// i refrence and it will give 0,1,2,3,4

function closureExv1(){
    for(let i =1; i<5; i++){
        setTimeout(function (){
            console.log(i)
        },i*1000)
    }
}
closureExv1()
//Solution 2: Using the var key have solve this issue ,So we somehow we have to give new i in eact iteration 

function closureExv2(){
    for(var i = 0; i < 5; i++){
        function newI(x){
                 setTimeout(function (){
                    console.log(x)
                 },x*1000)
        }
        newI(i)
    }
}
closureExv2()

localStorage.setItem("itemVal","Ram")
localStorage.getItem("itemVal")
