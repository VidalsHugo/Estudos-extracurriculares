texto = "Steve e Magal"

print(texto[0:5])
print(texto[8:])
print(texto[-5:])

# posicao inicial : quantidade de informacao a percorrer : passo
print(texto[::-1])

print(texto.find("e"))
print(texto[texto.find("e")+1:].find("e"))
print(texto.split(" "))

