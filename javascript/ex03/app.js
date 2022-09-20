// exercicio: empresa de desenvolvimento de software

let cargoEmpresa = "Programador Pleno";

switch(cargoEmpresa){
    case "Programador Junior":
        console.log("O programador Junior recebe R$4000.");
        break;

    case "Programador Pleno":
        console.log("O programador Pleno recebe R$5000.");
        break;
    case "Programador Senior":
        console.log("O programador Senior recebe R$6000.");
        break;
    case "Testador":
        console.log("O testador recebe R$5000.");
        break;
    case "Arquiteto":
        console.log("O arquiteto recebe R$8000.");
        break;
    case "Amnalista":
        console.log("O analista recebe R$7000.");
        break;
    case "Gerente":
        console.log("O gerente recebe R$10000.");
        break;
        default:
            console.log("Cargo não cadastrado.");
}