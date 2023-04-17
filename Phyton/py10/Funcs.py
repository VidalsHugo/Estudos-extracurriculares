def perguntar():
    return input("O que deseja realizar?\n"+
            "<I> - Para Inserir um usuário\n"+
            "<P> - Para Pesquisar um usuário\n"+
            "<E> - Para Excluir um usuário\n"+
            "<L> - Para Listar um usuário: ").upper()

def inserir(dicionario):
    dicionario[input("Digite o login: ").upper()]=[input("Digite o nome: ").upper(),
    input("Digite a ultima data de acessor: "),
    input("Qual a ultima estacao acessada: ").upper()]

    salvar(dicionario)

def pesquisar(dicionario):
    procurado = input("Digite o nome do usuário: ").upper()

    for e in dicionario:
        flag = False
        if e == procurado:
            flag=True
            print("Usuário encontrado: "+
                  str(dicionario.get(procurado)))
    if flag == False:
        print("Usuário não encontrado.")
def excluir(dicionario):
    usuario = input("Digite o nome do usuário para ser excluído: ").upper()

    for e in dicionario:
        flag = False;
        if e == usuario:
            del dicionario[usuario]
            flag = True
            print("Usuário excluído com sucesso!")
            break
    if flag == False:
        print("Usuário não encontrado.")

def listar(dicionario):
    usuario = input("Digite o nome do usuário a ser listado: ").upper()

    for e in dicionario:
        flag = False
        if e == usuario:
            print(str(dicionario[usuario]))
            flag = True
            break
    if flag == False:
        print("Não foi possivel encontrar o usuário.")

def salvar(dicionario):
    with open("bd.txt", "a") as arquivo:
        for chave, valor in dicionario.items():
            arquivo.write(str(chave) + ": " + str(valor))
