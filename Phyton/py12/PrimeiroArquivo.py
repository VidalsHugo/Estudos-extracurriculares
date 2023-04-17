# arquivo = open("primeiro_arquivo.txt", "w")
# arquivo.write("Meu primeiro arquivo!!!")
# arquivo.close()

#Com o with o arquivo é aberto e fechado apenas dentro do bloco
with open("primeiro_arquivo.txt", "w") as arquivo:
    arquivo.write("Hakuna Matata\n")
    arquivo.write("Eh lindo viver!")

with open("primeiro_arquivo.txt", "r") as arquivo:
    # ler = arquivo.read()
    # print(ler)
    for linha in arquivo.readlines():
        print(linha)