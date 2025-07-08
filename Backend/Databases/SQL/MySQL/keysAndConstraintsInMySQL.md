- add primary key in table: `ALTER TABLE table_name ADD PRIMARY KEY (column_name);` 
**For remove just use DROP in place of ADD** 

-  add foreign key in table: `ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES table_name2 (column_name2);`

- unique constraint in table: `ALTER TABLE table_name ADD UNIQUE (column_name);` 
    - primary key is generally added to specific columns, but unique constraint can be added to any column where you need all values to be unique of a column.

- [`check` constraint in table](https://youtu.be/Hy3qbMAoEJk?si=-JApzaONB12_P5g_&t=16377)
    - ex: `create table table_name (column_name INT CHECK (LENGTH(column_name) >= 7));`

- [Named Constraint](https://youtu.be/Hy3qbMAoEJk?si=3aFVaCdXHBUmgYvW&t=16647)
    - `CONSTRAINT constraint_name CHECK (condition);`
        - in this way you can name your own constraint: this constraint will be show when constraint is violated  