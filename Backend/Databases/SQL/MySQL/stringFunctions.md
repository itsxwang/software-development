- [MySQL string functions](https://dev.mysql.com/doc/refman/8.4/en/string-functions.html)

- Concat : `CONCAT(str1, str2, ...)` 
    - ex: `SELECT CONCAT('Hello', ' ', 'World');`
    - [using concat with actual table, and `concat_ws`](https://youtu.be/Hy3qbMAoEJk?si=0yktHVUruvi7mTIe&t=5657)

- substring function in sql: `SUBSTRING(str, start, length)` 
    - negative indexing: `SUBSTRING(str, -2, 2)`
    - ex: `SELECT SUBSTRING('Hello', 1);` -- returns 'ello'

- [Replace](https://youtu.be/Hy3qbMAoEJk?si=M9cqpT4C4dwIp5cG&t=6237)
    - syntax ``REPLACE(str, old, new)`

- [Reverse](https://youtu.be/Hy3qbMAoEJk?si=lq4VJUpAWvriTGZC&t=6497)

- upper: `UPPER(str)`
- lower: `LOWER(str)`
- char_length: `char_length(str)` - [use: get only names that are greater than 5 chars](https://youtu.be/Hy3qbMAoEJk?si=0EDjomZ1QHPUZ54l&t=6777)

- [`insert`,`left`,`right`,`repeat`,`trim`](https://youtu.be/Hy3qbMAoEJk?si=Ll09Y43QeHa0l0U5&t=6827)    
    - insert: ``INSERT(str, position, charsToremoveAfterInsertPlace , text)``
    - left: ``LEFT(str, length)``
    - right: ``RIGHT(str, length)``
    - repeat: ``REPEAT(str, count)``
    - trim: ``TRIM(str)``