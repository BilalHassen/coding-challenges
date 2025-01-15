/*
Warmup-1 -- notString
Given a string, return a new string where "not " has been added to the front.
 However, if the string already begins with "not", return the string unchanged.
*/

function notString(str) {
  if (str.substr(0, 3) !== "not") {
    return "not " + str;
  } else {
    return str;
  }
}

console.log(notString("candy"));
