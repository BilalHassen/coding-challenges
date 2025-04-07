/*
Warmup-2 -- stringSplosion
Given a non-empty string like "Code" return a string like "CCoCodCode".

Examples


*/

function stringSplosion(str){
   let newStr = ""
   let rand = ""
   for(let i = 0; i < str.length - 1; i++){
    newStr += str[i] 
    rand += newStr
   }
return rand + str
}

console.log(stringSplosion("Code"))

/*
first iteration str[i] === 0 next its 1
*/