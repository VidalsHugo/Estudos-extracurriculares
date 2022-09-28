class Banco{

    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(saldo){
        this.saldo += saldo;
    }
    saque(saldo){
        if(saldo <= this.saldo){
            this.saldo -= saldo;
        }
        else{
            console.log("Saldo indisponível.");
        }
    }

    getSaldo(){
        return this.saldo;
    }
    setSaldo(saldo){
        this.saldo=saldo;
    }

}

let meuBanco = new Banco(200);

meuBanco.deposito(100);
console.log(meuBanco.getSaldo());

meuBanco.saque(60);
console.log(meuBanco.getSaldo());