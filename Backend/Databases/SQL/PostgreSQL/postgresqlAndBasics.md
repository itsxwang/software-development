## Database (DB)

An organized collection of data that can be easily accessed, managed, and updated.

---

### DB vs DBMS vs RDBMS

- **DB (Database):** A collection of data.
- **DBMS (Database Management System):** Software that interacts with the database, allowing users to create, read, update, and delete data.  
  _Examples: PostgreSQL, MySQL, SQLite, MongoDB, etc._
- **RDBMS (Relational Database Management System):** A type of DBMS that stores data in a structured format using rows and columns. It uses SQL (Structured Query Language) for managing and querying data.  
  _Examples: PostgreSQL, MySQL, SQLite, etc._

---

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

- **Show all views in a specific schema:**  
  ```
  \dv
  ```

- **Show all users:**  
  ```
  \du
  ```

- **Describe a table:**  
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

---

### Control Flow in PostgreSQL

- **IF...ELSE in PostgreSQL:**

  ```sql
  DO $$ -- defines an anonymous code block
  BEGIN
      IF true THEN -- condition
           RAISE NOTICE 'Hello, World!'; -- prints a message to the console
      END IF;
      -- else if condition
      IF false THEN
           RAISE NOTICE 'This will not be printed.';
      ELSE
           RAISE NOTICE 'This is the else block.';
      END IF;
  END $$;
  ```

- **CASE WHEN in PostgreSQL:**

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
    COUNT(emp_id),
    CASE
      WHEN salary >= 1000000 THEN 'Very High'
      ELSE 'High'
    END AS sal_category
  FROM employees
  GROUP BY sal_category;
  ```

- **GROUP BY with ROLLUP:**

  ```sql
  SELECT
    sal_category -- COALSCECE(fname,'SUBTOTAL')
  FROM employees
  GROUP BY ROLLUP (sal_category);
  -- gives aggregate in last row
  ```

---

### [`COALESCE`](https://youtu.be/cnzka7kF5Zk?si=u6IuRNPz929ErZ9X&t=14047) Function

COALESCE is a SQL function that returns the first non-null value from a list of expressions. It's useful for handling missing or optional data.

**Example:**

```sql
SELECT COALESCE(middle_name, first_name, 'N/A') AS display_name
FROM employees;
```

- If `middle_name` is not null, it’s used.
- If `middle_name` is null, but `first_name` is not, `first_name` is used.
- If both are null, `'N/A'` is used.

**Why use COALESCE?**

- Helps avoid nulls in query results.
- Useful in reporting, data cleaning, or when combining columns.

**Gotcha:**  
All arguments must be of compatible types, or you’ll get a type error.

---
### `GROUPING`

The `GROUPING` function in PostgreSQL is used with `GROUP BY` and grouping sets (like `ROLLUP` or `CUBE`) to distinguish aggregated rows from regular grouped rows. It returns `0` for regular grouped rows and `1` for super-aggregate rows created by grouping sets.

**Example:**

```sql
SELECT
  sal_category,
  GROUPING(sal_category) AS is_aggregate,
  COUNT(*)
FROM employees
GROUP BY ROLLUP (sal_category);
```

- `is_aggregate = 0`: Regular group row.
- `is_aggregate = 1`: Aggregate (subtotal or grand total) row.

This helps identify which rows are subtotals or totals in your query results.

--- 
### `CUBE`
The `CUBE` operator in PostgreSQL is used with `GROUP BY` to generate subtotals for all possible combinations of specified columns. It’s useful for multidimensional analysis, such as creating pivot tables.

**Syntax Example:**

```sql
SELECT
  department,
  sal_category,
  COUNT(*)
FROM employees
GROUP BY CUBE (department, sal_category);
```

This query produces counts for:
- Each combination of `department` and `sal_category`
- Subtotals for each `department`
- Subtotals for each `sal_category`
- A grand total row

**How it works:**
- `CUBE` creates all possible groupings (including none) for the listed columns.
- Useful for reporting and analytics where you need totals at multiple levels.

**Tip:**  
Use the `GROUPING` function to identify which rows are subtotals or grand totals.

**Example with GROUPING:**

```sql
SELECT
  department,
  sal_category,
  GROUPING(department) AS dept_agg,
  GROUPING(sal_category) AS sal_agg,
  COUNT(*)
FROM employees
GROUP BY CUBE (department, sal_category);
```