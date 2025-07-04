[Database structure](https://youtu.be/SSKVgrwhzus?si=b4eo-XQSR7SSFO3Q&t=927)
    - starting point is server, where one/multiple DBs are stored
    - DB is a collection of tables
    - In DB we have schema that stores related Tables (means schema is group of tables)
    - Tables are collection of rows(records) and columns(fields)

-   [Primary key](https://youtu.be/SSKVgrwhzus?si=Qgn1kLi1zo_2uSjH&t=1017) is a unique identifier for each record in a table. It is used to ensure that each record in the table is unique and can be easily identified, ensure entity integrity.
It also used to combine table with other table, means it work as foerign key in other table   

- [Data types in  SQL](https://youtu.be/SSKVgrwhzus?si=uRmZb5bw5ENJDFc-&t=1067): As we know in relational database we have to define a structure of a database before we store any value in database, and therefore we have to tell which type of value we going to store in specific column. 
    - `INT`, `DECIMAL`, `DOUBLE` 
    - `VARCHAR`, `CHAR`, `TEXT`, `LONGTEXT` (Max size = 4 GB 4,294,967,295 bytes, used only when you have to store like full html pages or full blog posts)

         (char vs varchar difference: char is of fixed length means if you define `char(7)` then it will store only 7 characters(if more truncated, if less filled with space), varchar is more of dynamic length)
    - `DATE`, `TIME`, `DATETIME`, `TIMESTAMP` 