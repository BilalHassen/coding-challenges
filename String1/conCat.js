/*
String-1 -- conCat
Given two strings, append them together (known as "concatenation") and return the result. However, 
if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
*/

function conCat(a, b){

if(a[a.length - 1] === b[0]){
    console.log("if")
    return a.slice(0, a.length -1) + b
} else if(b[b.length - 1] === a[0]) {
    return a.slice(0) + b.slice(0, b.length -1) 
}

return a + b

  

}

console.log(conCat("abc", "cat"))