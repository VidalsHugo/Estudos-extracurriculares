function findLongestWordLength(str) {

  let soma=0;

  let myArray = str.split(" ");

  for(let i=0;i<myArray.length;i++){
    (myArray[i].length > soma)? soma = myArray[i].length: soma=soma
  }


  return soma;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));