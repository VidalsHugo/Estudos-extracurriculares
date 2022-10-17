function mutation(arr) {
    let flag=0;
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase();
    }

        for(let i=0;i<arr[1].length;i++){
            for(let j=0;j<arr[0].length;j++){
                console.log(`${arr[1][i]} == ${arr[0][j]}`)
                if(arr[1][i] == arr[0][j]){
                    flag++;
                    break;
                }
            }
            if(flag == arr[0].length){
                break;
            }
        }

    console.log(arr)
    console.log(flag)
    if(flag == arr[0].length || flag == arr[1].length){
        return true;
    }else{
        return false;
    }
}

 console.log(mutation(["ate", "date"]));