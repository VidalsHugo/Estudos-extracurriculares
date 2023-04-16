usuarios = {}
emails = ["vidal@gmail.com", "hugo@gmail.com"]
tupla = list(enumerate(emails)) 
print(tupla)

for key in range(0, len(tupla)):
    print("Email: ", tupla[key][1])
    usuarios[tupla[key]] = [input("Digite o nome"), input("Digite o nivel")]

for key, dado in usuarios.items():
    print("\nUsuario...", key[0])
    print("Email...", key[1])
    print("Nome...", dado[0])
    print("Nivel...", dado[1])
