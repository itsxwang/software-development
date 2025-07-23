DataType: attribute specifies the type of the data will be in the column of our DB.

[Most widely used](https://youtu.be/cnzka7kF5Zk?si=c0hocOf0rUyUh953&t=3147)

- Numeric(precision, scale): Used for exact numeric values. Precision is the total number of digits, and scale is the number of digits to the right of the decimal point. `Decimal` is a synonym for Numeric.

- Serial: An auto-incrementing integer type. It is commonly used for primary keys. And when you put serial in the column, it will automatically create a sequence for that column.
To change that sequence, you can use the `ALTER SEQUENCE` command.
```sql
ALTER SEQUENCE sequence_name RESTART WITH new_value;
```
- [or alter sequence using this way](https://youtu.be/cnzka7kF5Zk?si=mEUfHrJ_fNXrTKEw&t=4477)

this sequnce name can be finded by using the command:
```sql
SELECT pg_get_serial_sequence('table_name', 'column_name');
or 
\d table_name; -- this will show all the information about the table
```

- date and date time, functions and types are explained in another dedicated file.

---
Constraint: rules in postgres that apply to the column. 
- [primary key constraint](https://youtu.be/cnzka7kF5Zk?si=cfYIWIBj3lajzqpi&t=3427)

- [not null](https://youtu.be/cnzka7kF5Zk?si=ZqYKPjD4GkG7Iz1E&t=3497)

- [Default constraint](https://youtu.be/cnzka7kF5Zk?si=AR7COfeiM6zfzvPc&t=3527)


- [auto increment](https://youtu.be/cnzka7kF5Zk?si=gPOq5joaxn4nyJQq&t=3597)

- [check constraint](https://youtu.be/cnzka7kF5Zk?si=pZbWaZdbTp81y-II&t=9067) 
    - two ways to add check constraint:
        - at the time of table creation
        ```sql
        CREATE TABLE employees (
            employee_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            salary NUMERIC(10, 2) CHECK (salary > 0)
            -- or 
            CONSTRAINT salary_positive CHECK (salary > 0)
        );
        ```
        - after table creation
        ```sql
        ALTER TABLE employees ADD CONSTRAINT salary_positive CHECK (salary > 0);
        ```

    - Drop check constraint:
        ```sql
        ALTER TABLE employees DROP CONSTRAINT salary_positive;
        ```
        `\d table_name;` -- to see the constraints of the table
            