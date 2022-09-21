function perguntas(){
    let soma=0;
    let classifc; 
    
    classifc = prompt("Telefonou para a vítima?");
    if(classifc === "sim"){
        soma+=1;
    }
    classifc = prompt("Esteve no local do crime?");
    if(classifc === "sim"){
        soma+=1;
    }
    classifc = prompt("Mora perto da vítima?");
    if(classifc === "sim"){
        soma+=1;
    }
    classifc = prompt("Devia para a vítima?");
    if(classifc === "sim"){
        soma+=1;
    }
    classifc = prompt("Já trabalhou com a vítima?");
    if(classifc === "sim"){
        soma+=1;
    }

    if(soma <=1 ){
        console.log("Inocente!");
    }else if(soma === 2){
        console.log("Suspeito.");
    }else if(soma ===3 || soma === 4){
        console.log("Cúmplice!");
    }else{
        console.log("Assassino!!");
    }

}

perguntas();
