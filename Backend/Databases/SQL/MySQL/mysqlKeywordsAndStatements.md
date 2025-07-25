- [`DISTINCT`](https://youtu.be/Hy3qbMAoEJk?si=5bW4Bbc0Irg6VpeX&t=7757)

  - used to get distinct values from a column
  - `SELECT DISTINCT column_name FROM table_name;`, will only give distinct values of the column
  - `SELECT DISTINCT column_name1, column_name2 FROM table_name;`, will only give distinct comnination of column_name1 and column_name2

- [`order by` keyword](https://youtu.be/Hy3qbMAoEJk?si=C4knkAFqiF27QK8z&t=7917)

  - use for sorting, `SELECT * FROM table_name ORDER BY column_name ASC/DESC;`
  - you can also sort my multiple columns
  - `SELECT * FROM table_name ORDER BY column_name1 ASC, column_name2 DESC;`

- [`LIKE` keyword in SQL](https://youtu.be/Hy3qbMAoEJk?si=9jigmlOnHyuuF0lU&t=8117)

  - `SELECT * FROM table_name WHERE column_name LIKE '%letter%';`
  - `%` for any number of characters
  - `_` for any single character

- `NOT LIKE` keyword (opposite of `LIKE` keyword)

  - `SELECT * FROM table_name WHERE column_name NOT LIKE '%letter%';`

- use `RLIKE` for more complex regular expression

- [`LIMIT` keyowrd](https://youtu.be/Hy3qbMAoEJk?si=o9_ww8VEOLBBCpdF&t=8297)

  - with this we can see range of records
  - you can also add offset
  - `SELECT * FROM table_name LIMIT 2,2 ;` : this will give 2 records starting from 3rd record

- [`GROUP_BY`](https://youtu.be/Hy3qbMAoEJk?si=nIWPtNP4eb2A2Vvs&t=9307)

  - Used to aggregate multiple rows by the specific column(s) and perform aggregate functions like `COUNT`, `SUM`, `AVG`,`MAX`, `MIN` etc.

  - we can combine group by with `COUNT` and then it will count a values of a field of each group(means how many values of a particular field goes in the particular group) like this:
  - `SELECT column_name, count(fieldName) FROM table_name GROUP BY column_name;`
  - Group by multiple columns: `SELECT column_name1, column_name2, count(fieldName) FROM table_name GROUP BY column_name1, column_name2;`
    - this will only put those data points on same row(group) the data points which have same values combinely of both fields `column_name1` and `column_name2`

- [`IN` and `NOT IN`](https://youtu.be/Hy3qbMAoEJk?si=QJPbEsUweqHOBipC&t=14657)

  - `select * from table where column IN (value1, value2, value3);` : so as you can see it reduce duplication of `or` logical operator duplication
  - `NOT IN` is opposite of `IN`

- [`BETWEEN` keyword in SQL](https://youtu.be/Hy3qbMAoEJk?si=7KzgTuJNjY5ymI8I&t=14857)

  - `SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;`
    - value1 and value2 are inclusive

- IS NULL : `SELECT * FROM table_name WHERE column_name IS NULL;`
- IS NOT NULL : `SELECT * FROM table_name WHERE column_name IS NOT NULL;`

- [`ON DELETE CASCADE` and `ON DELETE SET NULL`](https://youtu.be/5OdVJbNCSso?si=ICBRadVnBpSJK9SB&t=8817)

   - Without `ON DELETE CASCADE`, you have to `SET foreign_key_checks=0`  
     before deleting a row in the parent table to avoid foreign key constraint errors. 

- `ON DELETE CASCADE`: When a row in the parent table is deleted, all related rows in the child table are also deleted.
    - Example: Deleting a user will also delete all their posts.
- `ON DELETE SET NULL`: When a row in the parent table is deleted, the foreign key in related child rows is set to `NULL`.
    - Example: Deleting a user will keep their posts, but the user ID in those posts becomes `NULL`.
- These options are specified when creating foreign key constraints.
- Example of a foreign key with `ON DELETE CASCADE`:
    ```sql
    CREATE TABLE child_table (
            id INT PRIMARY KEY,
            parent_id INT,
            FOREIGN KEY (parent_id) REFERENCES parent_table(id) ON DELETE CASCADE
    );
    ```
- This mechanism helps maintain referential integrity by automatically updating or deleting related data.

- [Having a roll up with clause](https://youtu.be/Hy3qbMAoEJk?si=D-b8b5xWHWYT-B8K&t=21687)

  - `SELECT column_name, count(fieldName) FROM table_name GROUP BY column_name HAVING count(fieldName) > 1;`: Its a substitute of where clause when using `group by`

- [`rollup`](https://youtu.be/5OdVJbNCSso?si=6yeUG6ueRwHXdaYM&t=8597)
  - rollup is a extension of `group by` clause, it gives total of values(grand total(super aggregate value)) of all numeric columns.
  - used with `group by` clause: give total of values of all numeric columns
    ```sql
    SELECT column_name1, count(fieldName) FROM table_name GROUP BY column_name1 WITH ROLLUP;
      ```
