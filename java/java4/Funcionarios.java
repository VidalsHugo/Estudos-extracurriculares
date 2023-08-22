
public class Funcionarios {
	
	private String id;
	private float salario;
	private String nome;

	public Funcionarios(String id, String nome, float salario) {
		this.id = id;
		this.nome = nome;
		this.salario = salario;
		
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public float getSalario() {
		return salario;
	}

	public void setSalario(float salario) {
		this.salario = salario;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public void aumento(float percent) {
		salario += salario * percent;
	}
}
