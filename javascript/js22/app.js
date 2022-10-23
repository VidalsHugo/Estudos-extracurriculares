const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

  let newArray = arr.slice();
  newArray.sort(function(a, b){
    return a == b ? 0 : a < b ? -1 : 1
  });

  return newArray;

}

nonMutatingSort(globalArray);