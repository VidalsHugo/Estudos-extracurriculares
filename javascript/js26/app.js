function uniteUnique(...arr) {

    let myArray = [];
  
    console.log(arr)
  
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr)
      for (let j = 0; j < arr[i].length; j++) {
        //console.log(arr[i][j])
        let count = 0;
        for (let k = 0; k < myArray.length; k++) {
          console.log(myArray)
          if (arr[i][j] == myArray[k]) {
            count += 1;
          }
        }
        if (count == 0) {
          myArray.push(arr[i][j]);
        }
      }
    }
  
  console.log(myArray)
    return myArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);