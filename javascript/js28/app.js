//Soma todos os primos

function sumPrimes(num) {

    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      let flag = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          flag += 1;
        }
      }
      if (flag == 2) {
        sum += i;
      }
    }
  
    console.log(sum)
    return sum;
  }
  
  sumPrimes(977);
