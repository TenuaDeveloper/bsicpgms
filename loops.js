const  openingHours = {
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
}

const restaurant = {
    name : 'Zaika',
    location : 'Vakil wishpeing Woods , Vakil Marigold R4',
    categories : ['Noveg','veg','Chineese','Organic'],
    starterMenu : ['Poha','Puri Sabji','Sandwitch','pasta','Idli'] ,
    mainMenu : ['Briyani','Butter Chicken','Paratha','Daal Chawal'],
    //To add openingHours with enhaced ES6 feature
    openingHours,
    //Below is the old way to write methods in the Objects
    order : function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    orderDelivery : function({mainIndex,starterIndex,address,time}){

        console.log(`Thanks Order Received ${this.starterMenu[starterIndex]},and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}
        `)

    },
    //New way to write methods int Objets No need to use function
    guestEntries(...users){
        
    },
    orderPasta : function(ing1,ing2,ing3){
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
}
const days = ["mon",'tue','wed','thu','friday','sat']
const menu= [...restaurant.mainMenu,...restaurant.starterMenu]
//Below is the method of old school way to iterate
// for(const item of menu.entries()){
// console.log(`${item[0]+1}:${item[1]}`)
// }

//New way to do the same thing using destructure the array

for(const [i,el] of menu.entries()){
    console.log(`${i+1}:${el}`)
}
for(const day  of days){
    const open = restaurant.openingHours[day]?.open??''
    const msg = open?'we are open at':'closed'
    console.log(`On ${day}, ${msg} ${open}`)
}

const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} Days: `

for(const day of properties){
  openStr += `${day},`
}

console.log(openStr)

//Properties Values


const values = Object.values(openingHours)
console.log(values)

//Entire Object

console.log(Object.entries(openingHours))
const entries = Object.entries(openingHours)
//iterate the data in one go

for(const [key,{open,close}] of entries)
{
    console.log(`On ${key}, we open at ${open} and closed at ${close} `)
}