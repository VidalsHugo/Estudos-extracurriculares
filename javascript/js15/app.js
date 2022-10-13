function largestOfFour(arr) {

  let bigArr = [];
  let bigNum = 0;
  let flag = 0;

  arr.forEach((e) =>{
    e.forEach((element) => {
      let aux;
      if(flag == 0){
        flag++
        bigNum=element;
      }
      if(element > bigNum){
        bigNum = element;
      }
    });
    bigArr.push(bigNum);
    bigNum=0;
    flag=0;
  });

  return bigArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));