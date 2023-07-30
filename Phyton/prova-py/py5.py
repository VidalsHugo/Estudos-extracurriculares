import requests
import re

r = requests.get('https://coderbyte.com/api/challenges/json/age-counting')
dados = r.json()

count = 0

for item in dados['data']:
    match = re.search(r'age=(5[0-9]|[6-9][0-9]|[1-9][0-9]{2,})', item)
    if match:
        count += 1

print(f"Total de ocorrências com valores iguais ou maiores que 50: {count}")