def preencherLista(lista):
    resp = "S"
    while resp == "S":
        animal = input("Digite o animal a ser adicionado na lista: ")
        lista.append(animal)
        resp = input("Digite \"S\" para continuar a preencher a lista!").upper()

def exibirLista(lista):
    if len(lista) > 0:
        for e in lista:
            print(e)
    else:
        print("Lista vazia!")

def pesquisarLista(lista):
    nome = input("Digite o nome para ser encontrado na lista.")
    for e in lista:
        if e == nome:
            print(f"Animal {nome} encontrado na lista!")

def excluirLista(lista):
    if len(lista) == 0:
        print("Lista vazia!")
    else:
        resp = "S"
        while resp ==  "S":
            if len(lista) > 0:
                nome = input("Digite o nome do animal a ser excluido da lista: ")
                flag=0
            else:
                print("Lista vazia!")
                break
            for e in lista:
                if e == nome:
                    flag=1
                    lista.remove(e)
                    print("Animal removido da lista...")
                    print("\nLista:")
                    for e in lista:
                        print(e)
            if flag==0:
                print("Animal não encontrado.")
            resp = input("Digite \"S\" para continuar a excluir da lista!").upper()

