package exercicio2;

import java.util.Locale;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Quantas pessoas serao digitadas?");
		int qtd = sc.nextInt();
		
		Pessoa[] pessoa = new Pessoa[qtd];
		
		double somaAltura=0, somaIdade=0;
		int qtdMenor=0;
		
		for(int i=0;i<pessoa.length;i++) {
			System.out.println("Dados da "+(i+1)+"a pessoa");
			sc.nextLine();
			System.out.println("Nome: ");
			String name = sc.nextLine();
			System.out.println("Idade: ");
			int idade = sc.nextInt();
			System.out.println("Altura: ");
			float altura = sc.nextFloat();
			
			if(idade<16) {
				qtdMenor +=1;
			}
			
			somaAltura += altura;
			somaIdade += idade;
			
			pessoa[i] = new Pessoa(name, idade, altura);
		}
		
		
		double mediaAltura = somaAltura / pessoa.length;
		//	pessoa.length = 100%
		//		5		  = x%
		double mediaIdade = (qtdMenor * 100)/pessoa.length;
		
		System.out.printf("Altura média: %.2f\n", mediaAltura);
		System.out.printf("Pessoas com menos de 16 anos: %.1f\n", mediaIdade);

		for(int i=0;i<pessoa.length;i++) {
			if(pessoa[i].getIdade() <16) {
				System.out.println(pessoa[i].getName());
			}
		}
		
		sc.close();
	}
}
