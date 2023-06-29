// const user ={
//     name:'Deepak',
//     email : 'deepaksingh@gmail.com',
//     address :{
//         city : 'Bangalore',
//         state : 'Karnatka'
//     }
// }

// //In old school if we want to get that object values from the user Object 

// // let name = user.name
// // console.log(name)
// // let city = user.address.city
// // console.log(city)

// //By using Destructring Method we can fetch like below in one line

// //let {name, email, address} = user

// //console.log("User Email Address",name,email,address)

// //Another way to destructure the nested object

// // let {name, email, address:{city}} =user
// // console.log(city)

// function x(){
//     return this
// }

// console.log(x())
//Destructring the Restaurant Menu
const restaurant = {
    name : 'Zaika',
    location : 'Vakil wishpeing Woods , Vakil Marigold R4',
    categories : ['Noveg','veg','Chineese','Organic'],
    starterMenu : ['Poha','Puri Sabji','Sandwitch','pasta','Idli'] ,
    mainMenu : ['Briyani','Butter Chicken','Paratha','Daal Chawal'],
    openingHours : {
        thu :{
            open : 9,
            close: 22,
        },
        friday :{
            open : 10,
            close: 23,
        },
        sat :{
            open : 8,
            close: 23,
        }
    },
    order : function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    orderDelivery : function({mainIndex,starterIndex,address,time}){

        console.log(`Thanks Order Received ${this.starterMenu[starterIndex]},and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}
        `)

    },
    orderPasta : function(ing1,ing2,ing3){
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
}


//Destructuring the Object we have to use Curly braces because while creating Object We are using Curly Braces
//And in Object Destructuring We need to give Exact property Name
restaurant.orderDelivery({
    time : '22:10',
    address : 'BTM 2nd Stage',
    mainIndex: 2,
    starterIndex: 1
})
const {name, openingHours,categories} = restaurant

console.log(name,openingHours,categories)

const {thu,friday,sat} = restaurant.openingHours

console.log(thu,friday,sat)

//Spread Operator ----

const arr = [1,2,3,4]

//Create a new array with the existing array with traditional way

const badArr = [5,6,arr] //or [5,6,arr[0],arr[1],arr[2]] for addding individual arr
console.log(badArr)
//Now by using spread operator easily we can add new element in the array and fix this issue

const newArr = [5,6,...arr]

console.log(newArr)

//copy Arr 

const menmainMenuCopy = [...restaurant.mainMenu]

console.log(menmainMenuCopy)

//Spread operator works for all the iterables(Arrays,strings,maps,sets) but not objects
//we can apply to split the string also

const str = "Deepak"

const newStr = [...str,' ','S.']

console.log(newStr)

//Join Two Arrays 

const menu = [...restaurant.mainMenu,...restaurant.starterMenu]

console.log("All the Items Availabe in the Zaika",menu)

//Real World Example of Spread operator while passing as arguments
// const ingreDiants = [
//     prompt("Let's add Ingidients for Pasta ing1"),
//     prompt("Add ingidients2"),
//     prompt("Add ingidients3")
// ]
// restaurant.orderPasta(ingreDiants[0],ingreDiants[1],ingreDiants[2])//old scholl way to passing arguments
// restaurant.orderPasta(...ingreDiants)

//Objects 

const newRestaurats = {
    foundedIn: 2021,
    ...restaurant,
    foundedBy : 'Gates'
}

console.log("New restaurant with existing Property ==>",newRestaurats)

//Spread Operator becuse it is using Right side of the Assignment Operator

const buildArr = [1,2,...[3,4]]

//Rest operator in Arrays


const [a,b,...others] = [1,2,3,4,5,6]

console.log(`a = ${a}, b = ${b}, anf others = ${others}`)

//Now we will appy on main menu and starter menu

const[poha,Briyani,...othersFood] = [...restaurant.mainMenu,...restaurant.starterMenu]

console.log(`Poha = ${poha} Briyani = ${Briyani} and rest of the menu = ${othersFood}`)

//Rest operator on objects like in restaurant we have weekdays and weekend like Saturday

const {sat:saturday,...weedays} = restaurant.openingHours

//console.log(`Saturday = ${saturday} and in weekdays : ${weedays}`)
//In Above Expression why we are not getting the value 
//console.log(`weedays = ${weedays.thu}`)
console.log(saturday,weedays)
// const [first,second] = restaurant.categories
// console.log(first,second) 


const add = (...values)=>{
    let sum  = 0
    for(let i = 0 ; i < values.length; i++){
        sum += values[i] 
    }
    console.log("Sum of all th passed values",sum)
}

add(1,2)
add(4,5,6,7,8)
add(4,3,2,1)
add(1,2,3)
// console.log(restaurant.order(2,1))
// //Above expression we can write using Destructring 

// const [starter,mainCourse] = restaurant.order(2,1) 
// console.log(`In the restaurant Starter is :  ${starter} and Main Menu is : ${mainCourse}` )

// //Destructure the nested Array 

// const nested = [1,4,[1,3,5]]

// //const[i,j,[k,l,m]] = nested
// //In Case if the Value is not Available then we can set default value as well
// const[i = 1,j = 1,[k = 1,l=2,m =3]] = nested
// console.log(i,j,k,l,m)
//Iterate all the item in the restaurant

for(item in restaurant){
    console.log(restaurant[item])
}




