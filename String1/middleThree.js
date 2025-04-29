/*
String-1 -- middleThree
Given a string of odd length, 
return the string length 3 from its middle, 
so "Candy" yields "and". The string length will be at least 3.
*/


function middleThree(str){
    const start = (str.length - 3) / 2;
    return str.slice(start, start + 3);
}


console.log(middleThree("candy"))