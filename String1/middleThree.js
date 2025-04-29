/*
String-1 -- middleThree
Given a string of odd length, 
return the string length 3 from its middle, 
so "Candy" yields "and". The string length will be at least 3.
*/


function middleThree(str){
  const leftStr = (((str.length) -3 ) /2)
const lastChar = (str.length - leftStr)

  
  return str.slice(leftStr, lastChar)
  
}


console.log(middleThree("abcd"))