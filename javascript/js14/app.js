function findLongestWordLength(str) {

  let soma=0;
  let myArray = str.split(" ");

  myArray.forEach((e) => {
    (e.length > soma) ? soma=e.length : soma=soma
  });
  
  return soma;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// R: 6
