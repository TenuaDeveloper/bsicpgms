//Array Methods
/* 
1. forEach
2. map
3. filter
4. reduce


*/

const numbers = [1,2,3,4,5]

function multiplyBy2(number,index){
 console.log("Index is ",index)
 console.log(`${number} * 2 = ${number*2}`)
}
// multiplyBy2(numbers[0],0)
// multiplyBy2(numbers[1],1)
for(let i = 0 ; i < numbers.length; i++){
    multiplyBy2(numbers[i],i)
}

//ForEach: We can achive above result using forEach and it is taking callBack

numbers.forEach((el,index)=>{
    console.log("Using ForEach Getting Data from Array",el,index)
})

