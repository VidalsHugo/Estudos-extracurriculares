function findElement(arr, func) {

    let myArray=[];

    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            return arr[i];
        }
    }
    return undefined;
  }
  
  console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));