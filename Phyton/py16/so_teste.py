import platform, getpass
from datetime import datetime

print(f"\nUsuario: {getpass.getuser()}   Acesso: {datetime.now()}")
print(" ")
print("Nome maquina.............", platform.node())
print("Arquitetura..............", platform.architecture())
print("Sistema Operacional......", platform.system())
print("Versao do SO.............", platform.release())
print("Processador..............", platform.processor())
print("Versao do Phyton.........", platform.python_version())