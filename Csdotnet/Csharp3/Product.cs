using System;

namespace Csharp3{


    enum ETipoCarro{
       corrida,
       normal,
       lento
    }

    class Product{

        public string name;
        public int preco;
        public ETipoCarro tipoCarro;

        public Product(string name, int preco, ETipoCarro tipoCarro){
            this.name = name;
            this.preco = preco;
            this.tipoCarro = tipoCarro;
        }

        public void list(){
            Console.WriteLine("Nome: "+name+" Preco: "+preco+" Tipo: "+tipoCarro);
        }

    }

}