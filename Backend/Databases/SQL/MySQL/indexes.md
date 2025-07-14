- [Indexes](https://youtu.be/5OdVJbNCSso?si=HQCM02zwXH-nv4FU&t=7487) are a type of data structure they are used to find values within a specific column more quickly, its technically a B-Tree DS

- MySQL performs searches sequentially through a columns, we can speed up process using Indexes. 
Applying index to a column, selecting and starting takes less time however updating and deleting takes more time

- ```SHOW INDEXES FROM table_name```: Displays the indexes of the table (like Primary Key, Foreign Key, Unique Key, etc.)
- Create Index: ```CREATE INDEX index_name ON table_name (column_name);```

- Drop Index: ```DROP INDEX index_name ON table_name;```

- [Multi column Index](https://youtu.be/5OdVJbNCSso?si=PojNvrMJ_48ncHmM&t=7717): ```CREATE INDEX index_name ON table_name (column_name1, column_name2);```

    - Order is important because MySQL uses a leftmost prefix strategy with indexes, meaning it can only use the index efficiently if the query filters on the leftmost columns of the index. In simple terms, if you have a multi-column index on (A, B), MySQL can use it for queries that filter on A or both A and B, but not just B.  
    - More clear, what mysql allows on (A,B) multi-column index:

        | Index on `(A, B)`                   | Query Example            | Index Usage                                                              |
        | ----------------------------------- | ------------------------ | ------------------------------------------------------------------------ |
        | Only **A**                          | `WHERE A = ?`            | Index on **A**                                                           |
        | **Both A and B**                    | `WHERE A = ? AND B = ?`  | Index on **(A, B)** fully used                                           |
        | **Both A and B** (range query on A) | `WHERE A >= ? AND B = ?` | **Partial index use:** index is used up to `A`, may scan `B` if possible |
        | **Only B**                          | `WHERE B = ?`            | ❌ Index not used — unless a **separate index on B** exists               |

    - ## ✅ Why?
        Because of the leftmost prefix rule, MySQL:
        > Can only traverse indexes starting from the first column.
        If you skip `A` and query only on `B`, MySQL can't use the `(A, B)` index.
        
        ## Performance Comparison
        | Query                   | Index Used                                | Performance                                    |
        | ----------------------- | ----------------------------------------- | ---------------------------------------------- |
        | `WHERE A = ?`           | Index on `(A, B)` → uses **only A**       | Fast, but **not as optimal** as filtering both |
        | `WHERE A = ? AND B = ?` | Index on `(A, B)` → uses **both A and B** | **Faster**, more selective(fewer matches), fewer rows scanned |
        - The composite index on `(A, B)` allows MySQL to narrow results more efficiently, reducing I/O and lookups.

            🚨 But: 
      - If A is highly selective (few matching rows), A = ? alone is often sufficient.

      - If A is low selectivity (matches many rows), combining with B = ? is much faster.

