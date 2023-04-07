using System;

namespace Csharp5{

    class Program{
        static void Main(string[] args){

            var data = new DateTime(); // valor padrao
            Console.WriteLine(data);

            var data2 = DateTime.Now; //Pega a data e hora atual
            Console.WriteLine(data2);

            var data3 = new DateTime(2000, 10, 8, 11, 23, 55); // ano, mes, dia, horas, minutos, segundos
            Console.WriteLine(data3);

            var formatada = String.Format("{0:yyyy/M/d}", data2);
            Console.WriteLine(formatada);

        }
    }
}