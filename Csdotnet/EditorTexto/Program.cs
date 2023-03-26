using System;

namespace EditorTexto
{
    class Program
    {
        static void Main(string[] agrs)
        {
            Console.Clear();
            Console.WriteLine("teste");
            menu();

        }
        static void menu()
        {
            Console.WriteLine("Oque você deseja fazer?");
            Console.WriteLine("1 - Abrir arquivo");
            Console.WriteLine("2 - Criar novo arquivo");
            Console.WriteLine("0 - Sair");

            short option = short.Parse(Console.ReadLine());

            switch (option)
            {
                case 0: System.Environment.Exit(0); break;
                case 1: abrir(); break;
                case 2: editar(); break;
                default: menu(); break;
            }

        }
        static void abrir()
        {
            Console.WriteLine("Qual caminho do arquivo?");
            string path = Console.ReadLine();

            using(var file = new StreamReader(path)){
                string text = file.ReadToEnd();
                Console.WriteLine(text);
            }

            Console.WriteLine();
            Console.ReadLine();
            menu();

        }
        static void editar()
        {
            Console.WriteLine("Digite seu texto abaixo (ESC para sair)");
            Console.WriteLine("----------------------");
            string text = "";

        do{
            text += Console.ReadLine();
            text += Environment.NewLine;
        }while(Console.ReadKey().Key != ConsoleKey.Escape);
        salvar(text);
        }
        static void salvar(string text){
            Console.WriteLine("Qual caminho para salvar o arquivo?");
            var path = Console.ReadLine();

             using(var file = new StreamWriter(path)){
                file.Write(text);
             }
             Console.WriteLine($"Arquivo {path} salvo com Sucesso!");
             Console.ReadLine();
             menu();
        }
    }
}