//Objects Array are good for not fit for real world data , Objects tore real time data, Objects store key value pair's
//Objects don't have index
//Object Store Key Value Pair,Object Don't have index

const person = {
    name: "Deepak",
    age : 34,
    hobbies:["Playing Football","Drinking","cooking","Reading Books"]
}
//console.log(typeof person)

//To accesss the nested element

for(const hobbies in person.hobbies)
{
    console.log(person.hobbies[hobbies])
}

//2nd method
for(const hobby of person.hobbies){
    console.log(hobby)
}

//How to add key value in the Object

person.gender = "Male"

console.log(person)

//access the data using brackets notation from any objects we have to give key name type string 
//Because by default the key is string

console.log(person["name"])

const key = "email"
//Here i want to add key value as a key in the person object So

person[key] = "Deepaksingh@gmail.com"

console.log("Email--->",person.email)

//In the case of Object we want to add a key which is having the space between two the we can use string key

const person1 = {
    name: "Deepak",
    age : 34,
    "Person hobbie":["Playing Football","Drinking","cooking","Reading Books"]
    
}
//How to iterate Object 
//By using for in loop and second one is Object.keys

const members = {
    section:"A",
    membersName : ["Sudeep","Pankaj","Mandeep","Mukesh","Arif"],
    avgAge : 44,
    gender:"Male"
}

for(let key in members){
    console.log(`${key} : ${members[key]}`)
}

const key1= "objectkey1"
const key2= "objectKey2"
const value1= "myValue1"
const value2= "myvalue2"

//Get the below expected result from above array
// const obj = {
//     objectkey1:"myValue1",
//     objectKey2: "myvalue2"
// }
const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj)

//spread Operator

const arr1 = [1,2,3,4]
const arr2 = [9,8,7,6]
 
const newArray = [...arr1,...arr2]

console.log(newArray)

//spread operator in Object

const obj1 = {
    key1 : "Value1",
    key2 : "Value2"
}

const obj2 = {
    key1 : "valueUnique",
    key3 : "Value3",
    key4 : "value4"
}
//In a 1 and 2 order sequence
const combineObj = {
    ...obj1,...obj2
}
//Reverse the sequence
const revcombineObj = {
    ...obj2,...obj1
}
console.log("Combine Object Value is :",combineObj)
console.log("Combine Object after reverse combine Value is :",revcombineObj)

//Object Destructring 

const band = {
    bandName : "led zeplin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFaousSong:"Kashmir"
};

//To destrurure and separate the key 

const {bandName:name,famousSong:song} = band

console.log("Band Details = ",name,`\n`,song)

//Objects inside Array

const users = [
    {userId :1,firstName : "Deepak",gender : "Male"  },
    {useId : 2, firstName : "Anu",gender :"female"},
    {userId : 3, firstName : "Shiv",gender:"Female"}
]

for(let user of users){
    console.log(`UserId : ${user.userId}, FirstName : ${user.firstName}, gender : ${user.gender}`)
    console.log('\n')
}

//Destructure the nested objects 

const [user1,user2,user3] = users

//want to destructure the firstName from user1 and gender from the last user

const [{firstName},,{gender}] = users
console.log("firstName :",firstName,"Gender : ",gender)

//Object Destructure

const person12 = {
    firstName : "Deepak",
    lastName : "Singh",
    age : 34 ,
    address : {
          flatNo: "C026",
          pinCode : 562106
    }
}

function printPersonData({firstName,address}){
       console.log(firstName,address.flatNo)
}

printPersonData(person12)