using System;

namespace Csharp2{
    class Program{
        static void Main(string[] args){
            var inteiro = 25;
            var real = 25.5f;

            //inteiro = real; ERROR
            inteiro = (int)real;

            Console.WriteLine(inteiro);

            //inteiro = int.Parse(real.ToString()); ERRO

            inteiro = Convert.ToInt32(real); // Arredonda
            Console.WriteLine(inteiro);

            var number = 5;

            switch(number){
                case 5:
                Console.WriteLine("5");
                break;
                case 4:
                Console.WriteLine("4");
                break;
                default:
                Console.WriteLine("Nada");
                break;
            }
            meuMetodo();
            var myName = Console.ReadLine();
            var name = retornaNome(myName);
            Console.WriteLine(name);
        }
        static void meuMetodo(){
            Console.WriteLine("Meu metodo");
        }
        static string retornaNome(string nome){

            return "Esse é o nome: "+nome+" !";
        }
    }
}