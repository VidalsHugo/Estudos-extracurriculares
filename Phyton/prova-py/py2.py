def ArrayChallenge(arr):

    value = float('inf')
    maxx = -1

    for i in range(len(arr)):
        if i < value: #comprou
            value = i

        elif i - value > maxx:
            maxx = i - value

    return maxx

# keep this function call here 
print(ArrayChallenge(input()))


