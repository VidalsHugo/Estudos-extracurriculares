import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Digite a quantidade de funcionarios: ");
		int num_funcionarios = scanner.nextInt();
		Funcionarios[] funcionario = new Funcionarios[num_funcionarios];
		
		scanner.nextLine();
		
		for(int i=0; i<num_funcionarios;i++) {
			
			System.out.println("Digite o ID: ");
			String id = scanner.nextLine();
			System.out.println("Digite o nome: ");
			String nome = scanner.nextLine();
			System.out.println("Digite o salario: ");
			float salario = scanner.nextFloat();
			
			scanner.nextLine();
			
			funcionario[i] = new Funcionarios(id, nome, salario);
			
		}
		
		System.out.println("Entre com o ID do funcionario que vai ter o aumento: ");
		String id = scanner.nextLine();
		
		System.out.println("Aumento de: ");
		float percent = scanner.nextFloat()/100;
		
		scanner.nextLine();
		
		//Encontrando funcionario
		boolean encontrado = false;
		for(int i=0; i< num_funcionarios;i++) {
			if(funcionario[i].getId().equals(id)) {
				funcionario[i].aumento(percent);
				System.out.println("Funcionario encontrado, adicionando aumento ...");
				encontrado = true;
				break;
			}
		}if(!encontrado)
			System.out.println("Funcionario não encontrado.");
		
		for(int i=0; i<num_funcionarios;i++) {
			System.out.println("ID: "+funcionario[i].getId()+ ", Nome: " + funcionario[i].getNome()+ ", Salario: " + funcionario[i].getSalario());
		}
		
		scanner.close();
	}
}
