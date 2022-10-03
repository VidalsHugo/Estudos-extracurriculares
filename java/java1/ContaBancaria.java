package exercicios;

public class ContaBancaria {
	
	private int number;
	private String name;
	private double value;
	
	public ContaBancaria(int number, String name, double value) {
		this.number = number;
		this.name = name;
		deposit(value);
	}
	
	public ContaBancaria(int number, String name) {
		this.number = number;
		this.name = name;
	}
	
	public void deposit(double valueDeposit) {
		value += valueDeposit;
	}
	public void withdraw(double valueWithdraw) {
		if(valueWithdraw > value) {
			System.out.println("Quantidade insuficiente no banco.");
		}else {
			value -= valueWithdraw+5.0;
		}
	}
	
	public String toString() {
		return "Account "
				+ getNumber()
				+", Holder: "
				+getName()
				+", Balance: $ "
				+String.format("%.2f",getValue());
	}
	
	public int getNumber() {
		return number;
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}
	
}
