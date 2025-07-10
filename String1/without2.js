/*
String-1 -- without2
Given a string, 
if a length 2 substring appears at both its beginning and end,
 return a string without the substring at the beginning, 
 so "HelloHe" yields "lloHe". 
 The substring may overlap with itself, so "Hi" yields "". 
 Otherwise, return the original string unchanged.
*/

function without2(str){
  if(str.slice(0,2) === str.slice(str.length -2, str.length) && str.length > 1){
    return str.slice(2,str.length)
  }

  return str
}

console.log(without2("x"))