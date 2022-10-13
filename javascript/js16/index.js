function confirmEnding(str, target) {

    let arr = str.split('');
    let tgt = target.split('');
    let flag = target.length;
  
    for(let i=str.length, j=target.length;i>0,j>0;i--,j--){
      if(arr[i-1] == tgt[j-1]){
        flag--;
        if(flag == 0){
          return true;
        }
      }else{
        return false;
      }
    }
  }
  
 console.log(confirmEnding("Connor", "n"));