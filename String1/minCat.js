/*
String-1 -- minCat
Given two strings, 
append them together (known as "concatenation") and return the result. 
However, if the strings are different lengths, 
omit chars from the longer string so it is the same length as the shorter string. 
So "Hello" and "Hi" yield "loHi". The strings may be any length.
*/

function minCat(a, b){

  if(a.length > b.length){
    return a.slice(a.length - b.length) + b
  } else if(b.length > a.length){
    return a + b.slice(b.length - a.length, b.length)
  } 

  return a + b 


}

console.log(minCat( "Hello", "Java"))