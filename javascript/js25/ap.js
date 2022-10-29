function myReplace(str, before, after) {

    str = str.split(' ');
  
    for(let i=0;i<str.length;i++){
      if(str[i] == before){
  
        let flag = false;
        if(str[i][0] == str[i][0].toUpperCase()){
            flag = true;
        }
        
        if(flag == false){
          str[i] = after
          str[i] = str[i][0].toLowerCase() + str[i].substring(1);
        }else if(flag == true){
          str[i] = after;
          str[i] = str[i][0].toUpperCase() + str[i].substring(1);
        }
      }
    }
  
    str = str.join(' ')
    console.log(str)
    return str;
  }
  
  myReplace("I think we should look up there", "up", "Down")