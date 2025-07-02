- [SQL](https://youtu.be/SSKVgrwhzus?si=O-gt94hZzz2ivF_t&t=467) is a structured query language. Used to make schema(database) and tables in it, and allow to perform CRUD operations on it. 

- [DBMS explained](https://youtu.be/SSKVgrwhzus?si=VrrOwIktrlRMHrf7&t=717) 
    - A software that manages all requests that coming to database, and it going to give them priority which SQL query must be execute first and so on..., this also manages security that whether the SQL query is even allowed to execute or not.

- [Need of server as hardware where this whole database will be stored](https://youtu.be/SSKVgrwhzus?si=W_HBeZA7CTMS0szs&t=757)

```
                    **Database**
                        |
                    Stores data


                    **SQL**
                         |
                    Query language to communicate with database
                    

                    **DBMS**
                         |
                    Manges Database


                    **Server**
                         |
                    Physical machines where database lives
```



- [Types of DBs](https://youtu.be/SSKVgrwhzus?si=_--Ve6Wtenrp39wL&t=797)
    - ***Realtional***:- Where data is store in relations (multiple tables. In tables we have rows(records) and columns(fields), and there some kind of relationship between those entities(1:1, 1:m, m:m). Ex: postgres, mysql, microsoft sql server.
    - ***Non Realtional***(NoSQL):- Where data is store in non relations. It can be in json format(key: value), graphs, columns(instead of rows), diagrams, documents etc. Ex: mongoDB, neo4j(graph based), appache cassandra(column based), redis(key value DB, work as a catching layer, store data in memory) etc.

