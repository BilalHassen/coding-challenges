/*
Warmup-2 -- arrayCount9
Given an array of ints, return the number of 9's in the array.
*/

function arrayCount9(nums){

    let countOfNines = 0

   nums.forEach((num)=>{
    num === 9 ? countOfNines += 1 : countOfNines
   })

   return countOfNines;
}

console.log(arrayCount9([1,3,4,5,9,9,9,9]))