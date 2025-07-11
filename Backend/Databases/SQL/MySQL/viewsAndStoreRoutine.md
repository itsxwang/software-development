## Views

- [Views in SQL](https://youtu.be/Hy3qbMAoEJk?si=ofez3q_cykCNGw1k&t=21437)
    - Views are stored queries that when invoked produce a reult set . A view act as a virtual table.
    - Basically we create a virtual table that points to another real table.
- Example: 
    - Create a view
        ```sql
            CREATE VIEW view_name AS
            SELECT name, age, gender FROM table_name;(or some other long query)
        ```
- show all views:
    ```sql
        SHOW FULL TABLES WHERE TABLE_TYPE = 'VIEW';
    ```
- to see view definition, this is used that mysql used to create the view: 
    ```sql
        SHOW CREATE VIEW view_name;
    ```
- drop view:
    ```sql
        DROP VIEW view_name;
    ```


---

## Stored Routines
- An SQL statement or a set of SQL statements that can be stored in the database and call be call no.of times.
    - Type of store Routine: 
        - [Stored Procedure](https://youtu.be/Hy3qbMAoEJk?si=z0sXW-5QEbM9pj01&t=22157)
            - ```DROP PROCEDURE IF EXISTS procedure_name;```: this will ensure that the procedure is not present in the database

            ```sql
            DELIMITER $$ -- (Temp change delimeter from ; to $$)
            CREATE PROCEDURE procedure_name()
            BEGIN
                SELECT * FROM table_name;
            END $$
            DELIMITER ; -- (change delimeter from $$ to ;)
            ```
            `call stored_procedure;`  or `call stored_procedure();`
            drop stored procedure: `DROP PROCEDURE procedure_name;`

            - [Argument passing in stored procedure](https://youtu.be/Hy3qbMAoEJk?si=UfsaiOW_FeiDqMNM&t=22677)
            - [Returning value from stored procedure](https://youtu.be/Hy3qbMAoEJk?si=eqAN_T9wunD3CvGk&t=23037)          




        - [User defined functions](https://youtu.be/Hy3qbMAoEJk?si=Jr5tcteHr8sI3kw9&t=23487)