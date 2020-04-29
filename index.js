function largestSubarraySum(array){
    let sum = 0
    let max = 0

    array.forEach(num => {
        if (sum + num < 0) {
            sum = 0
        } else {
            sum = sum + num
            if (sum > max) {
                max = sum
            }
        }
    })

    return max;
}