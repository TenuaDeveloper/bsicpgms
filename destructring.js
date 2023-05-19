const user ={
    name:'Deepak',
    email : 'deepaksingh@gmail.com',
    address :{
        city : 'Bangalore',
        state : 'Karnatka'
    }
}

//In old school if we want to get that object values from the user Object 

// let name = user.name
// console.log(name)
// let city = user.address.city
// console.log(city)

//By using Destructring Method we can fetch like below in one line

//let {name, email, address} = user

//console.log("User Email Address",name,email,address)

//Another way to destructure the nested object

// let {name, email, address:{city}} =user
// console.log(city)

function x(){
    return this
}

console.log(x())

