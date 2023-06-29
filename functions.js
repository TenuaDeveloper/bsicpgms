//Input :array, target (Number)
//Output : Index of target if target present in Array

const array = [1,2,5,7,4,3]

function findMyItemIndex(arr,item){

   for(let i = 0; i < arr.length; i++){
        if(arr[i]===item){
            return i
        }
   }
return "Not Found"
}

const findRes = findMyItemIndex(array,50)

console.log(findRes)

//Function Expression vs function declation
//In the function Delation we are writing function in a traditional Way and it is not storing anything
function declation(){
    console.log("I am function declation")
}
//In the function Expression we are writing like a variable and its storing the value as well
const expression = function(){
    console.log("I am function Expression")
}

declation()
expression()

//function Inside function 

const myFunc  = ()=>{

    const printName = ()=>{
        console.log("Print Name")
    }
    const addTwoNum = (num1,num2)=>{
         return num1 + num2
    }
    const addthreenum = (num1,num2,num3)=>{
        return num1 + num2 + num3
    }
    printName()
    console.log("Addition of Two num",addTwoNum(4,5))
    console.log("Addition of Three number ",addthreenum(3,6,8))
    console.log("Default Print ")
}
myFunc()
//Lexical Scope: For InnerDemo() function demo will be the Lexical scope for the innerDemo

let myName = "I am from Global Deepak"

function demo(){
   // let myName = "I am from demo Mukesh"
    function innerDemo(){
        //let myName = "I am from Inner Singh"
        console.log(myName)
    }
    innerDemo()
}

demo()
//Call Back Function 

function myFunc2(name){
console.log("Inside myFunc2 !!")
console.log(`your Name is ${name}`)
}

function myFunc1(callBack){
console.log("I am from Myfunc")
callBack("Deepak")
}
myFunc1(myFunc2)

//Function Returning Function 

function myFuncR(){
    function hello(){
        console.log("Hello World")
    }
    return hello
}

const ans = myFuncR()
ans()
