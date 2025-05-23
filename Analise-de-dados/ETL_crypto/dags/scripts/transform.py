import pandas as pd

def transform_crypto_data():
    df = pd.read_csv('/opt/airflow/data/bronze/crypto_prices_raw.csv')

    df['datetime'] = pd.to_datetime(df['datetime'])
    df['price'] = df['price'].round(2)
    df = df.sort_values(by=['datetime', 'crypto', 'currency'])

    # Salva versão tratada
    df.to_csv('/opt/airflow/data/silver/crypto_prices_clean.csv', index=False)
    print("Dados transformados com sucesso!")
