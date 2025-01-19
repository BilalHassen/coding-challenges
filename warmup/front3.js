/*
Warmup-1 -- front3
Given a string, we'll say that the front is the first 3 chars of the string. 
If the string length is less than 3, 
the front is whatever is there.
 Return a new string which is 3 copies of the front.
*/

function front3(str) {
  return str.length < 3
    ? str + str + str
    : str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
}

console.log(front3("ab"));
