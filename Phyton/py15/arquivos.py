import json

# with open("bd.json", "r") as arq_json:
#     dic = json.load(arq_json)
#     for chave, dados in dic.items():
#         print(chave + " | "+ str(dados))

dic = {
    "CHAVES":["CHAVES DO 8", "14/04/2017", "RECEP_01"],
    "QUICO":["QUICO DAS FLORES", "24/04/2017", "RAIOX_01"],
    "FLORINDA":["DONA FLORINDA", "18/04/2017", "RECEP_03"]
}

with open("bd1.json", "w") as arq_json:
    json.dump(dic, arq_json)