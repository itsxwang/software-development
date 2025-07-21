- [string functions](https://youtu.be/cnzka7kF5Zk?si=3A02RLKUqOb4bS0Y&t=6617)

    - String functions are used to manipulate and analyze string data in PostgreSQL.
    - Common string functions include:
        
        - `LENGTH()`: Returns the length of a string.
            ```sql
            SELECT LENGTH('Hello'); -- Returns 5
            ```
        - `UPPER()`: Converts a string to uppercase.
            ```sql
            SELECT UPPER('hello'); -- Returns 'HELLO'
            ```
        - `LOWER()`: Converts a string to lowercase.
            ```sql
            SELECT LOWER('HELLO'); -- Returns 'hello'
            ```
        - `SUBSTRING()`: Extracts a substring from a string.
            ```sql
            SELECT SUBSTRING('Hello World', 1, 5); -- Returns 'Hello'
            ```

        - `LEFT` and `RIGHT` functions:
            - `LEFT()`: Returns the leftmost characters of a string.
                ```sql
                SELECT LEFT('Hello World', 5); -- Returns 'Hello'
                ```
            - `RIGHT()`: Returns the rightmost characters of a string.
                ```sql
                SELECT RIGHT('Hello World', 5); -- Returns 'World'
                ```
                
        - `TRIM()`: Removes leading and trailing spaces from a string.
            ```sql
            SELECT TRIM('   Hello   '); -- Returns 'Hello'
            ```
        - `CONCAT()`: Concatenates two or more strings.
            ```sql
            SELECT CONCAT('Hello', ' ', 'World'); -- Returns 'Hello World'
            ```

        - `CONCAT_WS()`: Concatenates strings with a separator.
            ```sql
            SELECT CONCAT_WS(', ', 'Alice', 'Bob', 'Charlie'); -- Returns 'Alice, Bob, Charlie'
            ```
        - `REPLACE()`: Replaces occurrences of a substring within a string.
            ```sql
            SELECT REPLACE('Hello World', 'World', 'PostgreSQL'); -- Returns 'Hello PostgreSQL'
            ```
        - `POSITION()`: Returns the position of a substring within a string.
            ```sql  
            SELECT POSITION('World' IN 'Hello World'); -- Returns 7
            ```
        - `REGEXP_MATCHES()`: Matches a regular expression against a string.
            ```sql
            SELECT REGEXP_MATCHES('Hello World', 'World'); -- Returns {'World'}
            ```
        - `REGEXP_REPLACE()`: Replaces substrings matching a regular expression.
            ```sql
            SELECT REGEXP_REPLACE('Hello World', 'World', 'PostgreSQL'); -- Returns 'Hello PostgreSQL'
            ```
        - `STRING_AGG()`: Concatenates values from multiple rows into a single string.
            ```sql
            SELECT STRING_AGG(name, ', ') FROM users; -- Returns 'Alice, Bob, Charlie'
            ```
