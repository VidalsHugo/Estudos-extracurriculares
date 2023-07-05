
import math

class Circulo:
    def __init__(self,raio):
        self.raio = raio
    
    def calculaArea(self):
        return f'Area do circulo: {math.pi*self.raio**2}'
    def calculaPerimetro(self):
        return f'Perimetro do circulo: {2*math.pi*self.raio}'
    

circulo1 = Circulo(4)
circulo2 = Circulo(5)

print(circulo1.calculaArea())
print(circulo1.calculaPerimetro())
