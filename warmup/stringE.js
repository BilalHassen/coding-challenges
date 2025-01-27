/*
Warmup-1 -- stringE
Return true if the given string contains 
between 1 and 3 'e' chars.
*/

function stringE(str) {
  let eCounter = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] === "e") {
      eCounter += str[i];
    }
  }
  return eCounter.length >= 1 && eCounter.length <= 3;
}

console.log(stringE("heeel"));
