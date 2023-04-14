from Funcs import *

lista = []

print("Digite a opção que voce deseja:")

resp = 0
while resp != 5:

    print("1 - Preencher a lista\n2 - exibir a Lista\n3 - Pesquisar na Lista\n4 - Excluir elemento da lista\n5 - Para finalizar menu.")

    resp = int(input())

    if resp == 1:
        preencherLista(lista)
    elif resp == 2:
        exibirLista(lista)
    elif resp == 3:
        pesquisarLista(lista)
    elif resp == 4:
        excluirLista(lista)
    elif resp != 5:
        print("Digite um numero valido!")








