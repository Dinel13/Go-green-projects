./cloud_sql_proxy -instances=our-philosophy-314515:asia-southeast2:b21-cap0199=tcp:3306
mysql -u root -p --host 127.0.0.1 --port 3306

DELETE FROM `table_name` WHERE `id` BETWEEN 3 AND 10;
