#We are making n stone piles! The first pile has n stones. If n is even, then all piles have an even number of stones. If n is odd, all piles have an odd number of stones. Each pile must more stones than the previous pile but as few as possible. Write a Python program to find the number of stones in each pile.

value = int(input())
par_impar = ""
vector = []
if value%2==0:
    par_impar = "par"
else:
    par_impar == "impar"
for i in range (0, value):
    if par_impar == "par":
        vector.append(value)
        value +=2
    else:
        vector.append(value)
        value+=3
        
print(vector)
