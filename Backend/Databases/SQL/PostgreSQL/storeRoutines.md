# [stored routines](https://youtu.be/cnzka7kF5Zk?si=ppv4YEZPIMewQUqU&t=14087)

are set of sql statements that can be store and executed in the database, and call be call any no. of times.

- Types of stored routines

  - [Store procedures](https://youtu.be/cnzka7kF5Zk?si=ilBQebQcYqYAiulz&t=14137) are set of SQL statements and procedural logic that can perform operations like inserting, updating, deleting and querying data.

    ```sql
    CREATE OR REPLACE PROCEDURE procedure_name(param1 type,...)
    LANGUAGE plpgsql -- procedure language postgresql
    AS $$ -- delimiter change
    BEGIN
     -- procedural logic here
    END;
    $$
    ```
`CALL procedure_name(param1,...);`
  
  - [User defined functions](https://youtu.be/cnzka7kF5Zk?si=GIwufQSuQyE0ZW6X&t=14597) are custom functions created by the user to perform specific operations and retuen a value.
    ```sql
    CREATE OR REPLACE FUNCTION function_name(param1 type,...)
    RETURNS return_type AS $$
    BEGIN
     -- procedural logic here
     RETURN some_value;
    END;
    $$ LANGUAGE plpgsql;
    ```
- `SELECT function_name(param1,...);`

- [Return table](https://youtu.be/cnzka7kF5Zk?si=E-E5fhfFL5iLfDdK&t=15037)

- `SELECT * from function_name(param1,...);` - if function returns table
- otherwise it gives all columns result in one column