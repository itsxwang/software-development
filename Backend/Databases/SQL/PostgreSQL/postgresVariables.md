# Using Variables in PostgreSQL

In PostgreSQL, variables are primarily used within procedural languages such as PL/pgSQL, since standard SQL does not support variables directly. To declare and use variables, you typically work within a code block, such as a `DO` block or a function.

## Declaring Variables

Variables are declared with a specific data type in the declaration block. For example, you can declare a variable `std_name` of type `TEXT` and initialize it with a default value. You can also declare constant variables using the `CONSTANT` keyword, which means their values cannot be changed once set.

Variables can be used in various contexts, such as within a `DO` block, functions, or stored procedures.

### Example: Declaring and Using Variables in a DO Block

```sql
DO $$
DECLARE
    foo TEXT := 'bar';
BEGIN
    RAISE NOTICE '%', foo;
END $$;
```

In this example, the variable `foo` is declared and initialized with the value `'bar'`. The `RAISE NOTICE` then uses this variable.

## Using Variables in Functions

You can create functions that declare variables and return values. For example:

```sql
CREATE FUNCTION example_function () RETURNS text AS $$
    DECLARE
        five CONSTANT INTEGER := 5;
        ten INTEGER NOT NULL := 10;
        letter CHAR DEFAULT 'a';
    BEGIN
        RETURN letter;
    END;
$$
LANGUAGE plpgsql;
```

In this function, variables `five`, `ten`, and `letter` are declared with specific data types and initial values. The function returns the value of `letter`.

## Session-Level Variables

For more complex scenarios, you can use the [`pg_variables`](https://github.com/postgrespro/pg_variables) extension, which provides functions for creating, reading, and managing variables of scalar, record, and array types. This extension allows you to manage variables within your session, making them non-transactional and persistent throughout the session.

---

**Summary:**  
While SQL itself does not support variables, PostgreSQL provides mechanisms through procedural languages like PL/pgSQL to declare and use variables effectively.