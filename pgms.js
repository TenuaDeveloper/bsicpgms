//Diffrence between let var and const

// function demo(){
//     console.log("Value of a is ",a)
//     var a = 10
// }

// demo()

//const input = "George Raymond Richard Martin"; output :"GRRM";

const input = "George Raymond Richard Martin"

const result = input.split(' ').map(item=>item[0]).join('')
console.log(result)


// find the richard in the given String
let arr = [ 'George', 'Raymond', 'Richard', 'Martin' ]
let notFound = true

while(notFound && arr.length>0){

    if(arr[0]==='Richard'){
        console.log("I found the Richard")
        notFound = false
    }
    else{
        arr.shift()
    }
}

const input1 = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

  const res2 = input1.map(item => item.age)

  console.log("List of Array",res2)
//const input = "Every developer likes to mix kubernetes and javascript"; Output://"E3y d7r l3s to mix k8s and j8t";


const input3 = "Every developer likes to mix kubernetes and javascript"

let expectedOutput = input3.split('')