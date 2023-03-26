using System;

namespace Calculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            Console.WriteLine("Digite a operação: soma, subtracao, divisao ou multiplicacao");
            var op = Console.ReadLine();

            Console.WriteLine("Digite o primeiro numero: ");
            double var = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Digite o segundo numero: ");
            double varr = Convert.ToDouble(Console.ReadLine());
            double result=0;

            switch (op)
            {
                case "soma":
                    result = var + varr;
                    break;
                case "subtracao":
                    result = var - varr;
                    break;
                case "divisao":
                    result = var / varr;
                    break;
                case "multiplicacao":
                    result = var * varr;
                    break;

                default:
                    Console.WriteLine("ERRO");
                    break;
            }
            Console.WriteLine("resultado: "+result);
        }
    }
}