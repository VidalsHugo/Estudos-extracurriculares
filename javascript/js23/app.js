function destroyer(arr, ...num) {

    let newArray = []
    let flag=0;
  
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<num.length;j++){
      if(arr[i] !== num[j]){
        flag += 1;
      }
    }
    console.log(flag)
    if(flag == num.length){
      newArray.push(arr[i])
    }
    flag=0;
  }
  
    return newArray;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));