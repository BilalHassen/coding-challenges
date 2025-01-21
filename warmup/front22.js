/*
Warmup-1 -- front22
Given a string, take the first 2 chars 
and return the string with the 2 chars added at both the front and back, 
so 'kitten' yields 'kikittenki' chars are there.
*/

function front22(str) {
  return str.slice(0, 2) + str + str.slice(0, 2);
}
