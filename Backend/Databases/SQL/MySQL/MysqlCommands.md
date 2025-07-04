- Clear command line screen: `system clear`

- To show all databases: `show databases;` (or `schemas`)

- To create database: `create database database_name;` (or `schema` keyword instead of `database`)

- To delete database: `drop database database_name;` (or `schema` keyword instead of `database`)

- To use database: `use database_name;`

- To see which database you are using: `select database();` (or `select schema();`)

- Creating tables(Collection of related data held in table format held within a DB) ->

  ```sql
  CREATE TABLE table_name(
      field1 int NOT NULL PRIMARY KEY AUTO_INCREMENT,
      field2 VARCHAR(100) NOT NULL,
      ... (means you can insert a 100 characters in field2)
  )
  ```

- Create copy of a table:

  - Create copy of whole table `CREATE TABLE new_table AS SELECT * FROM old_table;`
  - specific fields copy `CREATE TABLE new_table AS SELECT field1, field2 FROM old_table;`
  - specific rows copy `CREATE TABLE new_table AS SELECT * FROM old_table WHERE field1 = value1;`

- [Setting up default values](https://youtu.be/Hy3qbMAoEJk?si=ayA62s_zRBya7M2h&t=2857)

  ```sql
  CREATE TABLE table_name (
    field1 int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    field2 VARCHAR(100) NOT NULL DEFAULT 'value2'
   );
  ```

- describe table `describe table_name;` (`desc` works) -> this will give you information about the table

- Modify columns in a table

  - Add column `ALTER TABLE table_name ADD COLUMN field1 VARCHAR(100);`
  - Modify column `ALTER TABLE table_name MODIFY COLUMN field1 VARCHAR(100);`
  - Rename column `ALTER TABLE table_name RENAME COLUMN field1 TO field2;`
  - Delete column `ALTER TABLE table_name DROP COLUMN field1;`

  - Add primary key `ALTER TABLE table_name ADD PRIMARY KEY (field1);`
  - Remove primary key `ALTER TABLE table_name DROP PRIMARY KEY;`

  - Rename table `ALTER TABLE table_name RENAME TO new_table_name;`
    - Second way `RENAME TABLE table_name1 TO new_table_name1, table_name2 TO new_table_name2;` this second way provides more flexiblility

- Adding data in table\
  if you wanna give values of fields in your own order

  ```sql

  INSERT INTO table_name (field2, field1)  VALUES (value2, 'value1'); (assuming field1 takes string type value)
  ```

  if you know the order of fields

  ```sql
  INSERT INTO table_name VALUES (value1, value2);
  ```

  insert multiple rows at a time

  ```sql
  INSERT INTO table_name VALUES (value1, value2), (value3, value4);
  ```

- Deleting data from table and delete table

  Before deleting if you in mysql workbench you must turn off safe updates to delete,modify data in a table without primary key `SET SQL_SAFE_UPDATES = 0;` will turn off safe updates for a session, to turn on again `SET SQL_SAFE_UPDATES = 1;`
  [Undertand the error that comes if we not do `SET SQL_SAFE_UPDATES = 0;`, and see how to disable this thing permanently in mysql workbench](https://youtu.be/Hy3qbMAoEJk?si=BSfvXAbs21GNF2p7&t=2537)

  ```sql
  DELETE FROM table_name WHERE field1 = value1;
  ```

  ```sql
  DELETE FROM table_name;
  ```

  (will delete all records from table)

  ```sql
  TRUNCNATE TABLE table_name;
  ```

  fast and do same work as `DELETE FROM table_name`

  for deleting a table

  ```sql
   DROP table table_name;
  ```

- [Reading data from table](https://youtu.be/Hy3qbMAoEJk?si=9jw-HwplF9r24JVc&t=2157)

  - `SELECT * FROM table_name;` (all columns and all rows)
  - `SELECT field1, field2 FROM table_name;` (only field1 and field2)
  - `SELECT field1, field2 FROM table_name WHERE field1 = value1;` (only field1 and field2 where field1 = value1)

- Modifying data in a table

  - `UPDATE table_name SET field1 = value1 where id = 7;`

- [Working with alias in SQL](https://youtu.be/Hy3qbMAoEJk?si=GTzt0dt_gKAYZxZz&t=4347)

  - `SELECT field1 as f1, field2 as f2 FROM table_name;`
