/*
Warmup-2 -- arrayFront9
Given an array of ints, 
return true if one of the first 4 elements in the array is a 9. 
The array length may be less than 4.
*/

function arrayFront9(nums){

 for(let i = 0; i <nums.length; i++){
    if(nums[i] === 9 && i <= 3){
        return true
    }
 }
 return false;
}

console.log(arrayFront9([1,2,1,3,4]))