function dropElements(arr, func) {

    let myArr=[];
  
    for (let i = 0; i < arr.length; i++) {
  
      if (func(arr[i]) == true) {
        myArr = arr.slice(i)
        break;
      }
    }
  
    return myArr;
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});