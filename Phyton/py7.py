lista = []

#tamanho da lista
tam = int(input("Tamanho da lista: "))

for e in range(1,tam+1,1):
    value = int(input("Digite um numero a ser adicionado na lista: "))
    lista.append(value)
    
print("=====================")
print("Lista:")
for e in lista:
    print(e)
print("=====================")

print("Maior numero da lista: "+ str(max(lista)))
print("Menor numero da lista: "+ str(min(lista)))
print("Soma dos numeros da lista: "+ str(sum(lista)))
