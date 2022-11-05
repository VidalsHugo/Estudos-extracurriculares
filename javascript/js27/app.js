
//Soma dos numeros impares de Fibonacci

function sumFibs(num) {

    let initial1 = 0;
    let sumFib = 1;
    let aux;
    let sumImpar = 1;
  
    for (let i = 0; i < num; i++) {
  
      if (i == 0) {
        continue;
      } else {
        aux = sumFib;
        sumFib += initial1;
        initial1 = aux;
  
        if (sumFib % 2 !== 0) {
          if (sumFib <= num) {
            sumImpar += sumFib;
          }else{
            break;
          }
        }
      }
    }
  
    console.log(sumImpar)
    return sumImpar;
  }
  
  sumFibs(75025);