function sumAll(array){
    let sum = 0; 
    array.forEach(item => {
        sum += item; 
    })
    // console.log(sum); 
    return sum; 
}

function findLargestInArray(array){
    // lazy for now, use binary search later 
    array.sort((a,b) => a-b); 
    return array[array.length-1]; 
}

function largestSubarraySum(array){
    let max = 0; 
    let s = 0; 
    for (let item of array){
        s += item; 
        max = Math.max(max,s); 
        if (s < 0){
            s = 0; 
        }
    }
    return max; 
}

function recursion(a){
    let sums = []; 
    a.forEach(function(item, index){
        // console.log(a);
        // console.log(a.slice(0, a.length-(index+1)))
        // console.log(a.slice(index))
        let newArray = a.slice(index); 
        if (a.length > 0){
            recursion(a.slice(index+1));
            recursion(a.slice(0,a.length-(index+1)))
        }
        sums.push(sumAll(newArray))
    })
    let result =  findLargestInArray(sums); 
    // console.log(`greatest is ${result}`)
    // console.log(sums); 
    return sums; 
}

let a = [1,2,3,4]; 
recursion(a); 
