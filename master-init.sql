CREATE USER 'replicator'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'replicator_password';
GRANT REPLICATION SLAVE ON *.* TO 'replicator'@'%';
FLUSH PRIVILEGES;

USE test_db;
