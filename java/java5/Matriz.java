package matrizes;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int nNumbers = 0;
		
		int[][] matriz = new int[n][n];
		int[] diagonal = new int [n];
		
		//formando matriz
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++) {
				int num = sc.nextInt();
				if(num < 0)
					nNumbers+=1;
					
				matriz[i][j] = num;
				if(i == j)
					diagonal[i] = num;
			}
		}
		
		System.out.println("Main diagonal:");
		for(int e : diagonal)
			System.out.print(e+" ");
		
		System.out.println();
		System.out.println("Negativa numbers = "+nNumbers);
		
		sc.close();
	}
}
