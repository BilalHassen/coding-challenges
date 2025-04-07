/*
Warmup-2 -- last2
Given a string, 
return the count of the number of times that a substring 
length 2 appears in the string and also as the last 2 chars of the string, 
so "hixxxhi" yields 1 (we won't count the end substring).
*/

function last2(str){

    let count = 0
    for(let i = 0; i <str.length -1; i++){
        if(str[i] + str[i + 1] === str[str.length -2] + str[str.length -1]){
            count++
        }
    }
    count >= 1 ? count -= 1 : count
    return count
    
  
}

console.log(last2("hi"))