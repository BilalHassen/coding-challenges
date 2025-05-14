/*
String-1 -- lastChars
Given 2 strings, a and b, 
return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". 
If either string is length 0, use '@' for its missing char.
*/


function lastChars(a, b){

    const firstChar = a ? a[0] : "@"
    const secondChar = b ? b[b.length -1]: "@"

    return firstChar + secondChar

}

console.log(lastChars("", "hello"))