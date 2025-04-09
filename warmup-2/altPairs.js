/*
Warmup-2 -- altPairs
Given a string, 
return a string made of the chars at indexes 0,1, 4,5, 8,9 ... 
so "kittens" yields "kien".
*/

function altPairs(str){
    let pairs = ""

  for(let i = 0; i < str.length -1 ; i+=4){
    if(str.length > 1){
     pairs += str[i] + str[i + 1]
    }
  }

  if(((str.length -1) % 4 === 0)){
    pairs += str[str.length - 1]
  }
  return pairs
  
}

console.log(altPairs("Chocolate"))