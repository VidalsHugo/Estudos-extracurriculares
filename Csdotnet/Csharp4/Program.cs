using System;

namespace Csharp4
{
    class Program
    {
        static void Main(string[] args)
        {

            //guids
            var id = Guid.NewGuid();
            Console.WriteLine(id);

            var id2 = Guid.NewGuid();
            Console.WriteLine(id2);

            if (id == id2)
            {
                Console.WriteLine("São iguais!");
            }
            else
            {
                Console.WriteLine("Não são iguais!");
            }

            //interpolação
            var price = 10.2;

            var texto = string.Format("O preço do produto é: {0}.", price);
            Console.WriteLine(texto);

            var texto2 = $"O preço do produto é: {price}.";
            Console.WriteLine(texto);

            //Comparação de texto
            var text = "testando";
            //verifica se é diferente
            Console.WriteLine(text.CompareTo("testando"));
            Console.WriteLine(text.CompareTo("Testajndoo"));

            var text2 = "String teste para testes";
            Console.WriteLine(text2.Contains("teste"));
            //ignora o Case sensitive
            Console.WriteLine(text2.Contains("TeSte", StringComparison.OrdinalIgnoreCase));

            //Verifica se a string é totalmente igual a outra
            Console.WriteLine(text2.Equals(text));

            Console.WriteLine(text2.IndexOf("para"));
            Console.WriteLine(text2.LastIndexOf("a"));

        }
    }

}