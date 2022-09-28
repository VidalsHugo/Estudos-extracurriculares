class Carrinho{

    constructor(itens, qtdItem, valorTotal){
        this.itens = itens;
        this.qtdItem = qtdItem;
        this.valorTotal = valorTotal;
    }

    addItem(item){
        let cont=0;
        for(let i=0;i<this.itens.length;i++){
            if(item.id === this.itens[i].id){
                this.itens[i].qtd += 1;
                cont+=1;
            }
        }
        if(cont === 0){
           this.itens.push(item);
        }

        this.qtdItem += item.qtd;
        this.valorTotal += item.preco;
    }

    removerItem(item){
        for(let i=0;i<this.itens.length;i++){
            if(this.itens[i].id == item.id){
                this.itens[i].qtd -= 1;
                this.valorTotal -= item.preco;
                if(this.itens[i].qtd == 0){
                    delete this.itens[i];
                }
            }
        }
    }

}


let carrinho = new Carrinho([
{
    id:0,
    nome: "casaco",
    qtd: 1,
    preco: 120
},
{
    id:1,
    nome:"Calça preta",
    qtd:1,
    preco:60
}
], 2, 180);

console.log(carrinho);
carrinho.addItem({id:0,nome:"casaco",qtd:1,preco:120});
console.log(carrinho);
carrinho.addItem({id:2,nome:"sapato",qtd:1,preco:400});
console.log(carrinho);
carrinho.removerItem({id:0,nome:"casaco",qtd:1,preco:120});
console.log(carrinho);
carrinho.removerItem({id:0,nome:"casaco",qtd:1,preco:120});
console.log(carrinho);