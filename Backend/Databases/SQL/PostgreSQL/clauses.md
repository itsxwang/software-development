- [postgres clauses](https://youtu.be/cnzka7kF5Zk?si=-nOUTBa-c0Ue1AKj&t=4687)
    - used to read data baased on some conditions.

where clause:   
- used to filter records based on a condition.
- can be used with `SELECT`, `UPDATE`, and `DELETE` statements.
- can use logical operators like `AND`, `OR`, and `NOT` to combine multiple conditions.
- can use comparison operators like `=`, `!=`, `<`, `>`, `<=`, `>=` to compare values.
- can use `BETWEEN` to filter records within a specific range.
    - example:
    
    ```sql
    SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
    ```

    - opposite not betwen
    
- `IN` can be used to filter records that match any value in a list.
    - Example:
    ```sql
    SELECT * FROM employees WHERE department IN ('HR', 'Finance');
    ```
    - `NOT IN` is vice versa.

- can use `IS NULL` or `IS NOT NULL` to check for null values.
    - Example:
    ```sql
    SELECT * FROM employees WHERE manager_id IS NULL; -- employees without a manager
    ```

- can use `LIKE` clause for pattern matching, often with wildcards `%` (matches any sequence of characters) and `_` (matches a single character).
    - Example:

    ```sql
    SELECT * FROM employees WHERE name LIKE 'A%'; -- names starting with 'A' 
    ```

   - opposite is `NOT LIKE`.
   
- Distinct clause:
    - used to return unique values from a column.
    - Example:
    ```sql
    SELECT DISTINCT department FROM employees;
    ```

- `order by` clause:
    - used to sort the result set by one or more columns.
    - can specify ascending (`ASC`) or descending (`DESC`) order.
    - Example:
    ```sql
    SELECT * FROM employees ORDER BY salary DESC;
    ``` 
- `group by` clause:
    - used to group rows that have the same values in specified columns into summary rows.
    - often used with aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.
    - Example:
    ```sql
    SELECT department, COUNT(employee_id) FROM employees GROUP BY department;
    ``` 
     Count the number of employees in each department


- `limit` clause:
    - used to specify the maximum number of records to return.
    - Example:
    ```sql
    SELECT * FROM employees LIMIT 10; -- returns the first 10 records
    ```
- `offset` clause:
    - used to skip a specified number of records before starting to return records.
    - often used with `LIMIT` to implement pagination.
    - Example:
    ```sql
    SELECT * FROM employees ORDER BY salary LIMIT 10 OFFSET 20; -- skips the first 20 records and returns the next 10
    ```