let combustivel = 2;
let consumo = 8;
let postoGas = [2, 15, 22, 10.2];
let proximo = 0;
let distante = [];

limite = combustivel * consumo;

postoGas.forEach((e) => {
    if (e <= limite) {
        distante.push(e);
    }
})
let maior;
for (let i = 1; i < distante.length; i++) {
    distante[i] > distante[i - 1] ? maior = distante[i] : false
}

console.log(distante)
console.log(maior)