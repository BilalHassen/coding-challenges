/*
String-1 -- seeColor
Given a string, if the string begins with "red" or "blue" 
return that color string, otherwise return the empty string.
*/

function seeColor(str){
    if(str.slice(0,3) === "red"){
        return "red"
    } else if(str.slice(0,4) === "blue"){
        return "blue"
    } else {
        return ""
    }
}

seeColor("blue")