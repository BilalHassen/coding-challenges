/*
String-1 -- endsLy
Given a string, return true if it ends in "ly".
*/

function endsLy(str) {
  return str.slice(str.length - 2, str.length) === "ly" ? true : false;
}

console.log(endsLy("Bilaly"));
