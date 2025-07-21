# These types are useful for handling and storing temporal data in PostgreSQL.


## Common Date and Time Functions in PostgreSQL

Here are some commonly used date and time functions:

- **CURRENT_DATE**: Returns the current date.
- **CURRENT_TIME**: Returns the current time, including the time zone.
- **NOW()**: Returns the current date and time with the time zone.
- **CURRENT_TIMESTAMP**: Returns the current date and time with the time zone. Synonymous with `NOW()`.
- **LOCALTIMESTAMP**: Returns the current date and time without the time zone.

- **DATE_PART(field, source)**: Extracts a specific part (such as year, month, day, etc.) from a date or time value.  
    Example:  
    ```sql
    DATE_PART('year', NOW()) -- returns the current year
    ```

- **EXTRACT(field FROM source)**: Retrieves subfields (such as year, month, day, etc.) from a date or time value.  
    Example:  
    ```sql
    EXTRACT(YEAR FROM NOW()) -- returns the current year
    ```
    *Note: Uses different syntax than DATE_PART.*

- **AGE(timestamp1, timestamp2)**: Calculates the interval between two timestamps. If only one timestamp is provided, it calculates the interval between the current time and the provided timestamp.  
    Example:  
    ```sql
    AGE(NOW()) -- returns the interval between the current time and the current time
    ```

- **DATE_TRUNC(field, source)**: Truncates a timestamp to a specified precision (such as year, month, day, etc.).  
    Example:  
    ```sql
    DATE_TRUNC('year', NOW()) -- returns the timestamp truncated to the year
    ```

- **TO_DATE(string, format)**: Converts a string to a date.  
    Example:  
    ```sql
    TO_DATE('2023-10-01', 'YYYY-MM-DD') -- converts the string to a date
    ```

- **TO_TIMESTAMP(string, format)**: Converts a string to a timestamp.  
    Example:  
    ```sql
    TO_TIMESTAMP('2023-10-01-15:30:00', 'YYYY-MM-DD-HH24:MI:SS') -- converts the string to a timestamp
    ```

---

## ✅ Core Date/Time Data Types

| Data Type                          | Description                      | Example Value                 |
| ---------------------------------- | -------------------------------- | ----------------------------- |
| `DATE`                             | Calendar date (year, month, day) | `'2025-07-20'`                |
| `TIME [ (p) ]`                     | Time of day (no date)            | `'14:30:00'`                  |
| `TIME [ (p) ] WITH TIME ZONE`      | Time of day with time zone       | `'14:30:00+05:30'`            |
| `TIMESTAMP [ (p) ]`                | Date and time (no time zone)     | `'2025-07-20 14:30:00'`       |
| `TIMESTAMP [ (p) ] WITH TIME ZONE` | Date and time with time zone     | `'2025-07-20 14:30:00+05:30'` |
| `INTERVAL`                         | Time span/duration               | `'2 days 3 hours 30 minutes'` |

`p` is the precision for fractional seconds (0-6).

---

### Details & Examples

- **DATE**
    ```sql
    SELECT DATE '2025-07-20';
    ```

- **TIME**
    ```sql
    SELECT TIME '14:30:00';
    -- Fractional seconds
    SELECT TIME '14:30:00.123456';
    ```

- **TIME WITH TIME ZONE (timetz)**
    ```sql
    SELECT TIME WITH TIME ZONE '14:30:00+05:30';
    ```

- **TIMESTAMP**
    ```sql
    SELECT TIMESTAMP '2025-07-20 14:30:00';
    ```

- **TIMESTAMP WITH TIME ZONE (timestamptz)**
    ```sql
    SELECT TIMESTAMP WITH TIME ZONE '2025-07-20 14:30:00+05:30';
    and -- when declaring column
    hire_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
    ```

- **INTERVAL**
    ```sql
    SELECT INTERVAL '2 days 3 hours 5 seconds 1 millisecond';
    `2 days 03:00:05.001` - Output
    -- Arithmetic with intervals
    SELECT NOW() + INTERVAL '1 day';
    ```

### Key Notes

- `TIMESTAMP` does not store time zone info.
- `TIMESTAMPTZ` it does store time zone info and adjusts for it.
- You can convert between types with casts:
    ```sql
    SELECT '7'::INT; -- Cast string to integer
    SELECT CURRENT_DATE::TIMESTAMP; -- Cast date to timestamp
    SELECT '2025-07-20'::DATE; -- Cast string to date
    ```
