using System;

namespace Csharp3{

    class Program{
        static void Main(string[] args){

            Product product = new Product("carro", 35, ETipoCarro.corrida);
            product.list();
        }

    }

}