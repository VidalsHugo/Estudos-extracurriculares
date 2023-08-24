package java3;

import java.util.Scanner;

public class Matriz2 {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int linha = sc.nextInt();
		int coluna = sc.nextInt();
		
		int[][] matriz = new int[linha][coluna];
		
		for(int i=0;i<linha;i++) {
			for(int j=0;j<coluna;j++) {
					int n = sc.nextInt();
					matriz[i][j] = n;
				}	
			}
		
		//posição escolhida:
		int choice = sc.nextInt();
		
		for(int i=0;i<linha;i++) {
			for(int j=0;j<coluna;j++) {
				if(matriz[i][j] == choice) {

					System.out.println("Position "+i+","+j+":");
					if((i>=0 && i<linha) && ((j-1)>=0 && (j-1)<coluna))
						System.out.println("Left: "+matriz[i][j-1]);
					if((i>=0 && i<linha) && ((j+1)>=0 && (j+1)<coluna))
						System.out.println("Right: "+matriz[i][j+1]);
					if(((i-1)>=0 && (i-1)<linha) && (j>=0 && j<coluna))
						System.out.println("Up: "+matriz[i-1][j]);
					if(((i+1)>=0 && (i+1)<linha) && (j>=0 && j<coluna))
						System.out.println("Down: "+matriz[i+1][j]);
				}
			}
		}
		
		sc.close();
	}
}
