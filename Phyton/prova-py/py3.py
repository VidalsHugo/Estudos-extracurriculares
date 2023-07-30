def SearchingChallenge(strParam):

  ocorrencias = {}
  no_repeat = []

  for char in strParam:
    if char in ocorrencias:
      ocorrencias[char] += 1
    else:
      ocorrencias[char] = 1

  for key, value in ocorrencias.items():
    if value == 1:
      no_repeat.append(key)

  strParam = str(no_repeat[0])
  # code goes here
  return strParam+"yt_hxz_25c_"

# keep this function call here 
print(SearchingChallenge(input()))
