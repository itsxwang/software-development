- [`CASE` To apply conditions](https://youtu.be/Hy3qbMAoEJk?si=4kgc-TZmDtgzuJ-J&t=15057)

    - ` CASE WHEN condition THEN value1 WHEN condition AND condition THEN value2 ELSE value3 END as new_column_name `

- `ifnull(column_name, 'default_value')`
    - `SELECT IFNULL(column_name, 'default_value') FROM table_name;`
    - means if column_name is null then return default_value other wise return column_name value