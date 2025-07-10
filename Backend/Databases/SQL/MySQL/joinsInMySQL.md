- [Joins in MySQL](https://youtu.be/Hy3qbMAoEJk?si=gbDmuiZXcBMPNikY&t=18627)
    - join operation is used to combine rows from 2 or more tables based on a related column between them.
- [Types of joins in MySQL](https://youtu.be/Hy3qbMAoEJk?si=HSb2CeTmFX7tAd2K&t=18807)
    - Cross join
        - Every row from one table is combined with every row from another table.   
        - First way is normal: `SELECT * FROM table1, table2;` 
        - `SELECT * FROM table1 CROSS JOIN table2 CROSS JOIN ...;`
    - Inner join
        - returns only the rows where there is a match between the specified columns in both left (or first) and right (or second) tables.
        - `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;`
        - by default join means inner join: `SELECT * FROM table1 JOIN table2 ON table1.id = table2.id;`
    - Left join
       - Return all rows from the left table and the matching rows from the right table.
       - `SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;`
    - Right join
        - Return all rows from the right table and the matching rows from the left table.
        - `select * from table1 right join table2 on table1.id = table2.id;`


