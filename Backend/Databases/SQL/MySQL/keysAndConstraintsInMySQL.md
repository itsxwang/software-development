- add primary key in table: `ALTER TABLE table_name ADD PRIMARY KEY (column_name);` 
**For remove just use DROP in place of ADD** 

-  add foreign key in table: `ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES table_name2 (column_name2);`

- unique constraint in table: `ALTER TABLE table_name ADD UNIQUE (column_name);` 
    - primary key is generally added to specific columns, but unique constraint can be added to any column where you need all values to be unique of a column.

- [`check` constraint in table](https://youtu.be/Hy3qbMAoEJk?si=-JApzaONB12_P5g_&t=16377)
    - ex: `create table table_name (column_name INT CHECK (LENGTH(column_name) >= 7));`
    - `AlTER TABLE table_name ADD CHECK (condition);`
    - remove check constraint: `ALTER TABLE table_name DROP CHECK constraint_name;`

- [Named Constraint](https://youtu.be/Hy3qbMAoEJk?si=3aFVaCdXHBUmgYvW&t=16647)
    - `CONSTRAINT constraint_name CHECK (condition);`
        - in this way you can name your own constraint: this constraint will be show when constraint is violated  


- primary key:
    - in column: `create table table_name (column_name INT PRIMARY KEY);`

    - in table definition: `create table table_name (column_name INT, PRIMARY KEY (column_name));`

    - WIth alter:  `ALTER TABLE table_name ADD PRIMARY KEY (column_name);`

- foreign key:
    - in column: `create table table_name (column_name INT FOREIGN KEY REFERENCES table_name2 (column_name2));`
    - in table definition: `create table table_name (column_name INT, FOREIGN KEY (column_name) REFERENCES table_name2 (column_name2));`

        - WIth alter:  `ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES table_name2 (column_name2);`

    - Drop foreign key: `ALTER TABLE table_name DROP FOREIGN KEY constraint_name;`
        - `constraint_name` is the name of the foreign key constraint you want to remove. If you not know the constraint name, you can use `SHOW CREATE TABLE table_name;` to see the table definition, this definition was used to create table.

---
## Show key related details
```sql
SELECT column_name, constraint_name, referenced_table_name  
FROM information_schema.key_column_usage 
WHERE table_name = 'orders';
```

**🔍 Purpose:**
> Shows all key-related constraints (primary keys, foreign keys, unique keys) on the `orders` table — including what columns are involved, what constraints they belong to, and (if foreign keys) what table they reference.

**🧠 Part-by-Part Breakdown:**
| Part                                       | Meaning                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `SELECT column_name`                       | Shows the column in `orders` involved in a key/constraint (e.g., `cust_id`, `order_id`)       |
| `constraint_name`                          | Name of the key constraint (`PRIMARY`, `fk_name`, etc.)                                       |
| `referenced_table_name`                    | If it's a **foreign key**, this shows which table it refers to (e.g., `employees`)            |
| `FROM information_schema.key_column_usage` | A **system metadata table** in MySQL that stores info about all key constraints on all tables |
| `WHERE table_name = 'orders'`              | Filters the result to only show info related to the `orders` table                            |

**🧪 Example Output:**
| column\_name | constraint\_name | referenced\_table\_name |
| ------------ | ---------------- | ----------------------- |
| order\_id    | PRIMARY          | NULL                    |
| cust\_id     | orders\_ibfk\_1  | employees               |


- Note: There are more fields in `information_schema.key_column_usage`, like `referenced_column_name` and `ordinal_position`(which is the position of the column in the table), you can see more my describing this table.


- default constraint:
    - ```CREATE TABLE table_name (column_name INT DEFAULT 0);```
    -  `ALTER TABLE table_name alter column_name set default 0;` 