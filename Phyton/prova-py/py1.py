
def MathChallenge(strParam):

    array = [int(number) for number in strParam]
    count = len(array)-1

    arrayD = []

    for i in range(len(array)):
    # print(str(array[i])+" * "+"2** "+ str(count))
        val = array[i] * (2 ** count)
        arrayD.append(val)
        count-=1

    strParam = sum(arrayD)
   # code goes here
    return strParam

 # keep this function call here 
print(MathChallenge(input()))
