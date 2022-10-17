
function chunkArrayInGroups(arr, size) {

    let count =0;
    let count1 =size;
    let array=[];
    let tam = arr.length/size;
    for(let i=0;i<tam;i++,count+=size,count1+=size){
        console.log(count)
      array.push(arr.slice(count,count1));
    }
  
    return array;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) ;