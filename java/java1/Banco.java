package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class Banco{
	public static void main(String[] args) {
		
		ContaBancaria novaConta;
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter account number: ");
		int number = sc.nextInt();
		sc.nextLine();
		System.out.println("Enter account holder: ");
		String name = sc.nextLine();
		
		System.out.println("Is there na initial deposit?(y/n) ");
		char i = sc.next().charAt(0);
		
		if(i == 'y') {
			System.out.println("Enter initial deposit value: ");
			double value = sc.nextDouble();
			novaConta = new ContaBancaria(number, name, value);
		}
		else {
			novaConta = new ContaBancaria(number, name);
		}
		
		System.out.println("Account data: ");
		System.out.println(novaConta);
		
		System.out.println("\nEnter a deposit value: ");
		double value2 = sc.nextDouble();
		
		novaConta.deposit(value2);
		System.out.println("Updated account data:");
		System.out.println(novaConta);
		
		
		System.out.println("\nEnter a withdraw value: ");
		double value3 = sc.nextDouble();

		novaConta.withdraw(value3);
		System.out.println("Updated account data: ");
		System.out.println(novaConta);
		
		sc.close();
	}
}
