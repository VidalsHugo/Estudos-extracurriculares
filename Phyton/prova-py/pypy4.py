def StringChallenge(strParam):

  strParam = [char for char in strParam]
  flag = 0
  i = 0
  while True:
    if i < len(strParam)-1:
      if strParam[i] == 'a':
        if strParam[i+1] == 'b': #reduz de 'ab' -> 'c'
          strParam[i:i+2] = 'c'
        elif strParam[i+1] == 'c': #reduz de 'ac' -> 'b'
          strParam[i:i+2] = 'b'
        flag+=1
      elif strParam[i] == 'b':
        if strParam[i+1] == 'c': #reduz de 'bc' -> 'a'
          strParam[i:i+2] = 'a'
        elif strParam[i+1] == 'a': #reduz de 'ba' -> 'c'
          strParam[i:i+2] = 'c'
        flag+=1
      elif strParam[i] == 'c':
        if strParam[i+1] == 'a': #reduz de 'ca' -> 'b'
          strParam[i:i+2] = 'b'
        elif strParam[i+1] == 'b': #reduz de 'cb' -> 'a'
          strParam[i:i+2] = 'a'
        flag+=1
    i+=1
    if i == len(strParam):
      i = 0
    if flag == 0:
      break
    flag = 0
    
  # code goes here
  return len(strParam)

# keep this function call here 
print(StringChallenge(input()))