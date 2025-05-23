import pandas as pd
import sqlite3
import os

def load_to_sqlite():

    df = pd.read_csv('/opt/airflow/data/silver/crypto_prices_clean.csv')
    conn = sqlite3.connect('/opt/airflow/db/crypto.db')    # conecta ao banco SQLite
    df.to_sql('crypto_prices', conn, if_exists='append', index=False)
    conn.close()
    print("Dados carregados com sucesso no SQLite!")