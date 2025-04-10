/*
Warmup-2 -- stringYak
Suppose the string "yak" is unlucky. 
Given a string, return a version where all the "yak" are removed, 
but the "a" can be any char. The "yak" strings will not overlap.
*/

function stringYak(str) {
  let luckyStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "y" && str[i + 2] === "k") {
      i += 2;
    } else {
      luckyStr += str[i];
    }
  }

  return (luckyStr);
}

console.log(stringYak("yukpak"));
