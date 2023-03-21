using System;

namespace Csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var texto = "Hello World!\n";
            Console.Write(texto);

            var teste2 = "\n10 dez\n";
            Console.Write(teste2);

            // "var" transforma a variavel dependendo da sua atribuicao
            var number = true; // transforma number em booleano
            var number2 = 10.0; // transforma o number2 em double

            const int NUMBER = 15; // Constante
            byte myByte = 101; //Byte (não muito usado assim)
            int teste = 10; // inteiro
            float x = 1.0f; // F
            decimal y = 2.0m; // M
            double z = 3.0;
            bool num = true; //booleano true
            bool num2 = false; //booleano false
            char caractere = 'h'; // char (usando aspas simples apenas)
            string hugo = "vidal"; // string (usando aspas duplas)
            object variable; // Object(tipo qualquer)
            variable = 2.5468;
            variable = "xyz";
            int? testeNull = null; //tipo Nulo (com interrogacao depois do tipo)
            Int32 aaa = 5; // tipo sem Alias
            int valor = 100;
            uint inteiroSS = (uint)valor; // conversao explicita
            int val = int.Parse("100"); // Parse
            int val2 = Convert.ToInt32("100"); // Convert

            Console.Write(number+"\n");
            Console.Write(number2+"\n");
            Console.Write(NUMBER+"\n");
            Console.Write(myByte+"\n");
            Console.Write(teste+"\n");
            Console.Write(x+"\n");
            Console.Write(y+"\n");
            Console.Write(z+"\n");
            Console.Write(num+"\n");
            Console.Write(num2+"\n");
            Console.Write(caractere+"\n");
            Console.Write(hugo+"\n");
            Console.Write(variable+"\n");
            Console.Write(testeNull+"\n"); //vazio
            Console.Write("\n\n");
            Console.Write(aaa+"\n");


        }
    }
}
