/*
String-1 -- atFirst
Given a string, return a string length 2 made of its first 2 chars.
 If the string length is less than 2, use '@' for the missing chars.
*/

function atFirst(str){
    
    return (str + "@@").slice(0, 2);
}

console.log(atFirst(""))