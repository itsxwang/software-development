# PostgreSQL Typecasting

PostgreSQL fully supports typecasting and is quite flexible compared to many databases.

---

## ✅ Ways to Typecast in PostgreSQL

### 1. Using the `CAST` Keyword

```sql
SELECT CAST('123' AS INTEGER);
```

---

### 2. Using the Double Colon `::` Operator

```sql
SELECT '123'::INTEGER;
```
This is shorter and more commonly used in Postgres.

---

### 3. Function-Based Casting

Some types have dedicated conversion functions:

```sql
SELECT TO_CHAR(current_timestamp, 'YYYY-MM-DD');
SELECT TO_TIMESTAMP('2025-07-20 14:30', 'YYYY-MM-DD HH24:MI');
```

---

## ✅ Common Typecasts

| From    | To       | Example                      |
|---------|----------|-----------------------------|
| TEXT    | INTEGER  | `'7'::INTEGER`             |
| INTEGER | TEXT     | `7::TEXT`                  |
| TEXT    | DATE     | `'2025-07-20'::DATE`        |
| TEXT    | BOOLEAN  | `'true'::BOOLEAN`           |
| DATE    | TIMESTAMP| `current_date::TIMESTAMP`   |
| INT | FLOAT    | `7::FLOAT`                 |
| INT | BOOLEAN  | `7::BOOLEAN`               |

---

## ✅ Implicit vs Explicit Casting

- **Implicit Cast:**  
    Postgres automatically converts if safe.

    ```sql
    SELECT 1 + '2'; -- '2' is auto-cast to integer
    ```

- **Explicit Cast:**  
    You specify the cast intentionally.

    ```sql
    SELECT '2'::INTEGER + 1;
    ```

---

## ✅ When to Cast

- Converting data types for compatibility
- Formatting for display
- Performing operations requiring specific types (like date arithmetic)

