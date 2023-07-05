
#Write a Python program to find a list of integers with exactly two occurrences of nineteen and at least three occurrences of five. Return True otherwise False.

listaI = []
point_19 = 0
point_5 = 0

for i in range(0,5):

    val = int(input())
    listaI.append(val)
    if val == 19:
        point_19+=1
    if  val == 5:
        point_5+=1
        
result = "true" if point_19 == 2 and point_5 == 3 else "false"
print(result)
print(listaI)
