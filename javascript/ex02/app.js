//ex02

let nome = "Hugo";
let sobrenome = "Vidal";
let idade = 21;
const numCliente = 981405181;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let bomPagador = true;

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;
console.log("Valor do montante: "+ montante);

/*if(bomPagador){
    console.log("O cliente "+ nome + " é bom pagador.");
}else{
    console.log("O cliente "+nome+" não é um bom pagador.");
}*/

console.log("O cliente "+nome+ (bomPagador? " é bom pagador.":" não é bom pagador."));


if(idade >=18 && idade <=25){
    taxaDeJuros = 0.09;
}else if(idade >=26 && idade<=35){
    taxaDeJuros = 0.08;
}else if(idade >=36 && idade <=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}
console.log(taxaDeJuros);