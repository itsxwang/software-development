## Database (DB)

An organized collection of data that can be easily accessed, managed, and updated.

---

### DB vs DBMS vs RDBMS

- **DB (Database):** A collection of data.
- **DBMS (Database Management System):** Software that interacts with the database, allowing users to create, read, update, and delete data.  
  _Examples: PostgreSQL, MySQL, SQLite, MongoDB, etc._
- **RDBMS (Relational Database Management System):** A type of DBMS that stores data in a structured format using rows and columns. It uses SQL (Structured Query Language) for managing and querying data.  
  _Examples: PostgreSQL, MySQL, SQLite, etc._

## DB vs Schema vs Table

- **DB (Database):** A collection of related data.
- **Schema:** A logical container within a database that holds tables, views, and other database objects. It helps organize and manage database objects.
- **Table:** A structured format within a schema that holds data in rows and columns.

---

## PostgreSQL Basics

### Accessing PostgreSQL

- Run `psql` client as the `postgres` user (requires superuser privileges):

  ```sh
  sudo -u postgres psql
  ```

### Changing the `postgres` User Password

- Change password using SQL:

  ```sql
  ALTER USER postgres WITH PASSWORD 'new_password';
  ```

- Or interactively:

  ```
  \password postgres
  ```

  > By default, PostgreSQL does not provide a password for a user. You must set one if you want to use tools like pgAdmin.

---

### Common `psql` Commands

- **Clear the screen:**

  ```
  \! clear
  ```

- **List all databases:**

  ```
  \l
  ```

- **Connect to a specific database:**

  ```
  \c database_name
  ```

- **Show all tables in the current database:**

  ```
  \dt
  ```

- **Show all users:**

  ```
  \du
  ```

- describe a table:

  ```
  \d table_name
  ```

---

### SQL Queries

- **Show all tables in a specific schema:**

  ```sql
  SELECT table_name FROM information_schema.tables WHERE table_schema = 'your_schema_name';
  ```

- **Show all columns in a table:**

  ```sql
  SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'your_table_name';
  ```

- **Show current user:**

  ```sql
  SELECT current_user;
  ```

- **Show current database:**

  ```sql
  SELECT current_database();
  ```

- **Show current schema (namespace):**

  ```sql
  SELECT current_schema();
  ```

- **Show all schemas:**

  ```sql
  SELECT schema_name FROM information_schema.schemata;
  ```

---

### Creating Users and Databases

- **Create a new user:**

  ```sql
  CREATE USER new_user WITH PASSWORD 'new_password';
  ```

- **Create a new database:**

  ```sql
  CREATE DATABASE new_database;
  ```

- if else in postgresql:

  ```sql
  DO $$ -- defines a an anonymous code block
  BEGIN
      IF true THEN -- condition
           RAISE NOTICE 'Hello, World!'; -- to prints a message to the console, from an anonymous code block
      END IF;
      -- else if condition
      IF false THEN
           RAISE NOTICE 'This will not be printed.';
      ELSE
           RAISE NOTICE 'This is the else block.';
      END IF;
  END $$;
  ```

- case when in postgresql:

  ```sql
  SELECT
      CASE
          WHEN condition1 THEN result1
          WHEN condition2 THEN result2
          ELSE default_result
      END AS alias_name
  FROM table_name;
  ```

  Example:

  ```sql
  SELECT
    COUNT(emp_id) ,
    CASE
      WHEN salary >= 1000000 THEN 'Very High'
      ELSE 'High'
    END AS sal_category
  FROM
    employees
  GROUP BY
    sal_category
  ;
  ```
