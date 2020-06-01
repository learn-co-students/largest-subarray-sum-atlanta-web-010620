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
