package exercicio3;

import java.util.Locale;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.println("How many rooms will be rented?");
		
		int qtdQuartos=sc.nextInt();
		
		Pensionato[] pensionato = new Pensionato[10];
		
		for(int i=0;i<qtdQuartos;i++) {
			System.out.println("Rent #"+(i+1)+":");
			sc.nextLine();
			System.out.println("Name: ");
			String name = sc.nextLine();
			System.out.println("Email: ");
			String email = sc.nextLine();
			System.out.println("Room: ");
			int room = sc.nextInt();
			
			pensionato[room] = new Pensionato(name, email, room);
		}
		
		System.out.println("Busy rooms: ");
		
		for(int i=0;i<pensionato.length;i++) {
			if(pensionato[i] != null) {
				System.out.println(i+": "+pensionato[i].getName()+", "+pensionato[i].getEmail());
			}
		}
		sc.close();
	}
}
