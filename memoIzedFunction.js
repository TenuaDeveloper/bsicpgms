function expensiveFunction(n){
   console.log("Calculating .....")

 return n*2

}

const memoizedFunction = (function (){
       const cache = {}

       return function(n){
        if(n in cache){
            console.log("Fetching Results....",n)
            return cache[n]
        }
        else{
                 const result = expensiveFunction(n)
                 cache[n] = result
                 console.log("Cache",cache[n])
                 return result
        }
       }

})()

console.log(memoizedFunction(5))
console.log(memoizedFunction(5))
console.log(memoizedFunction(10))


