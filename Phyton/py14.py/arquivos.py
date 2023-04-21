base_dados = []

with open("iris.data", "r") as arquivo:

    for registro in arquivo.readlines():
        base_dados.append(registro.split(","))

for i in base_dados:
    print(i)