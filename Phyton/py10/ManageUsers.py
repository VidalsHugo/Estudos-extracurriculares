from Funcs import *

usuarios = {}
opcao = perguntar()

while opcao == "I" or opcao == "P" or opcao == "E" or opcao == "L":

    if opcao == "I":
        inserir(usuarios)
    elif opcao == "P":
        pesquisar(usuarios)
    elif opcao == "E":
        excluir(usuarios)
    elif opcao == "L":
        listar(usuarios)

    opcao = perguntar()