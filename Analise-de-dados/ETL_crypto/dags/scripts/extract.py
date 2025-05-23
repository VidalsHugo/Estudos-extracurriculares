import requests
import pandas as pd
from datetime import datetime

def extract_crypto_data():
    cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'XRP', 'DOGE', 'SOL', 'DOT']
    vs_currencies = ['USD', 'BRL']
    records = []

    for crypto in cryptos:
        for currency in vs_currencies:
            url = f'https://api.coinbase.com/v2/prices/{crypto}-{currency}/spot'
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                price = float(data['data']['amount'])
                records.append({
                    'datetime': datetime.now().isoformat(),
                    'crypto': crypto,
                    'currency': currency,
                    'price': price
                })
            else:
                print(f"Erro ao acessar {url}: {response.status_code}")

    df = pd.DataFrame(records)
    print(df)
    df.to_csv('/opt/airflow/data/bronze/crypto_prices_raw.csv', index=False)
    print("Dados extraídos com sucesso!")