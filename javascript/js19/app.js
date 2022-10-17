function frankenSplice(arr1, arr2, n) {

    let arr2Copia = arr2.slice();
    let arr1Copia = arr1.slice();
    arr1Copia.reverse(); //revertendo arrey1Copia

    for(let i=0;i<arr1Copia.length;i++){

        arr2Copia.splice(n, 0, arr1Copia[i]);
    }

    return arr2Copia;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));