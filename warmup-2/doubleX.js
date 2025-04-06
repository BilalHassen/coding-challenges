/*
Warmup-2 -- doubleX
Given a string, return true if the first instance of "x"
 in the string is immediately followed by another "x".
*/

function doubleX(str) {
    for(let i = 0; i <str.length -1; i++){
     
      if(str[i] === "x" && str[i + 1] !== "x"){
          return false
      } else if(str[i] === "x" && str[i + 1] === "x") {
        return true
      }
   }

   return false
  
     }

console.log(doubleX("axxbb"))