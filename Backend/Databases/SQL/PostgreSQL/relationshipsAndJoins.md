- [relationships in postgres](https://youtu.be/cnzka7kF5Zk?si=klL17GOshdGn9K3D&t=10037)


- cutomers and order example
    ```sql
    CREATE TABLE customers (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50)
    );

    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        order_date DATE,
        customer_id INT,
        FOREIGN KEY(customer_id) REFERENCES customers(id)
    );
    ```
- Add foreign key with ALTER statement
    ```sql
    ALTER TABLE orders
    ADD COLUMN customer_id INT,
    ADD FOREIGN KEY(customer_id) REFERENCES customers(id);
    ```
- Drop foreign key with ALTER statement
    ```sql
    ALTER TABLE orders
    DROP constraint foreign_key_constraint_name;
    ```

    `\d tableName;` to see table structure where you find constraint name

- [M:N relationship, with implementation](https://youtu.be/cnzka7kF5Zk?si=oOYH80WHMGA0qju7&t=11567)

---
- [Joins and its types](https://youtu.be/cnzka7kF5Zk?si=A1Ko8CEyuCAN_hDP&t=10867)

    - Join operation used to combine rows from two or more tables based on a related column between them.

- Cross Join
    - Every row of the first table is matched with every row of the second table
    - ex: `SELECT * FROM table1 CROSS JOIN table2;`
        - or `SELECT * FROM table1, table2;`

- Inner Join
    - Returns only those rows where there is a match between specified columns in both tables.
    - ex: `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;`

- Left Join
    - Returns all rows from the left table, and the matched rows from the right table.
    - ex: `SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;`

- Right Join    
    - Returns all rows from the right table, and the matched rows from the left table.
    - ex: `SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;`


Note: When you write only `JOIN`, it is equivalent to `INNER JOIN`.
