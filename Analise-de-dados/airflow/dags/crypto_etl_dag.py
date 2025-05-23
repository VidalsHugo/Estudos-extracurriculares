from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
from airflow.sensors.filesystem import FileSensor

from scripts.extract import extract_crypto_data
from scripts.transform import transform_crypto_data
from scripts.load import load_to_sqlite

default_args = {
    'start_date': datetime(2025, 1, 1),
    'schedule_interval': '@daily',
    'catchup': False
}

with DAG('crypto_etl_pipeline', default_args=default_args) as dag:
    extract = PythonOperator(
        task_id='extract_data',
        python_callable=extract_crypto_data
    )

    transform = PythonOperator(
        task_id='transform_data',
        python_callable=transform_crypto_data
    )

    load = PythonOperator(
        task_id='load_data',
        python_callable=load_to_sqlite
    )

    extract >> transform >> load
