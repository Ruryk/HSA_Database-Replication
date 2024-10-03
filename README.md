# HSA12 21. Database: Replication

## Set up MySQL Cluster

- Create 3 docker containers: mysql-m, mysql-s1, mysql-s2
- Setup master slave replication (Master: mysql-m, Slave: mysql-s1, mysql-s2)
- Write script that will frequently write data to database.
- Ensure, that replication is working.
- Try to turn off mysql-s1 (stop slave).
- Try to remove a column in  database on slave node (try to delete last column and column from the middle).
- Write conclusion in readme.md