function truncateString(str, num) {

    let string = str.split('');
    let string2 = string.slice(0,num);
    let string3 = string2.join('');
    if(num >= str.length){
        return string3;
    }else{
        return string3+'...';
    }
  
    return string3;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length +2 ));