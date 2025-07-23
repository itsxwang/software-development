- [crud](https://youtu.be/cnzka7kF5Zk?si=2vUGlr8IBdf3BhrJ&t=2127)

```sql
create table users (
       id serial primary key,
       name varchar(255),
       email varchar(255),
       password varchar(255)
);
```

- serial is an auto-incrementing integer type.
- `INT` is also a type that can be used for auto-incrementing, but serial is more commonly used in PostgreSQL. With `INT` you would need to set up a sequence manually.Like this:

- Set the default value of a column when creating the table:

```sql
CREATE TABLE users (
       id serial primary key,
       name varchar(255) DEFAULT 'Unknown',
       email varchar(255) DEFAULT 'unknown@example.com',
       password varchar(255) DEFAULT 'password123' NOT NULL
);
```

- `On update` example:

````sql
CREATE TABLE example_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


- rename the table

```sql
ALTER TABLE users RENAME TO new_users;
```

- unique constraint can be added to a column to ensure that all values in the column are different.

    ```sql
    ALTER TABLE users ADD CONSTRAINT constraint_name UNIQUE (email);
    ```


```sql
CREATE SEQUENCE users_id_seq;
ALTER TABLE table_name ALTER COLUMN col_name SET DEFAULT nextval('users_id_seq');
````

add not null to the column if you want to ensure that it cannot be null.

```sql
ALTER TABLE users ALTER COLUMN col_name SET NOT NULL,
ALTER COLUMN col_name SET DEFAULT 'default_value';
```

Alter multiple columns

```sql
ALTER TABLE table_name ALTER COLUMN column_name1 TYPE new_data_type, ALTER COLUMN column_name2 TYPE new_data_type;
```

Add and drop columns

```sql
ALTER TABLE table_name ADD COLUMN new_column_name data_type;
ALTER TABLE table_name DROP COLUMN column_name;
```

Rename a column

```sql
ALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;
```


change the default value of a column after the table has been created:

```sql
ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT 'default_value';
```

Alter multiple things at once in column

```sql
ALTER TABLE employees
    ALTER COLUMN hire_date TYPE TIMESTAMP,
    ALTER COLUMN hire_date SET NOT NULL,
    ALTER COLUMN hire_date SET DEFAULT CURRENT_TIMESTAMP;
```

---

Insert into the table

```sql
INSERT INTO users (name, email, password) VALUES ('John Doe', 'john.doe@example.com', 'password123'),
('Jane Smith', 'jane.smith@example.com', 'password456');

OR

INSERT INTO users VALUES ('John Doe', 'john.doe@example.com', 'password123');
```

default values can be set for columns in the table definition or altered later.

---

## READING DATA

Selecting data from the table

```sql
SELECT * FROM users;
-- or
SELECT * from users e; -- alias now we can write e.field, `as` is optional

```

```sql
SELECT name as username, email FROM users WHERE id = 1;
```

---

Modifying data in the table

```sql
UPDATE users SET name = 'John Updated' WHERE id = 1;
```

---

Deleting data from the table

```sql
DELETE FROM users WHERE id = 1;
```

```sql
DELETE FROM users;
```

delete all rows from the table.
