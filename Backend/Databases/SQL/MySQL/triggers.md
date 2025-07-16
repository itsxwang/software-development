- [Triggers](https://youtu.be/5OdVJbNCSso?si=eOorGcVP4E5eoq-Q&t=9747)
  - When an event happens do something automatically
  - Ex: INSERT, UPDATE, DELETE
  - check data, handle errors, auditing tables, etc.

  ```sql
  CREATE TRIGGER trigger_name
  BEFORE/AFTER INSERT/UPDATE/DELETE ON table_name
  FOR EACH ROW -- this means the trigger will execute for each row affected by the event
  BEGIN
      -- SQL statements to execute
  END; 
  ```

What is this AFTER and BEFORE means in triggers?

- ✅ BEFORE Trigger
  - Executes before the row is inserted, updated, or deleted in the table.
  - Used to:
    - Modify/validate data before it is saved.
    - Example: Auto-calculate or correct a value before the row is stored.
  ```sql
  CREATE TRIGGER trigger_name
  BEFORE INSERT ON table_name
  FOR EACH ROW
  SET NEW.column = ...;
  ```
- ✅ AFTER Trigger
  - Executes after the row is inserted, updated, or deleted.
  - Used to:
     - Log changes, trigger updates in another table.
     - Example: After inserting an order, create an audit log.

  ```sql
  CREATE TRIGGER trigger_name
  AFTER INSERT ON table_name
  FOR EACH ROW
  INSERT INTO audit_log (...) VALUES (...);
  ``` 

## ✅ When to use, BEFORE vs AFTER triggers?:
| Use Case                                         | Trigger Type |
| ------------------------------------------------ | ------------ |
| Modify inserted/updated data                     | **BEFORE**   |
| Logging / side-effects after change              | **AFTER**    |
| Prevent bad data                                 | **BEFORE**   |
| Cascading operations (insert into another table) | **AFTER**    |


## ✅ Behavior by Trigger Type:

| Trigger Type      | `NEW.column`         | `OLD.column`    |
| ----------------- | -------------------- | --------------- |
| **BEFORE INSERT** | value being inserted | ❌ Not available |
| **AFTER INSERT**  | value inserted       | ❌ Not available |
| **BEFORE UPDATE** | new value            | old value       |
| **AFTER UPDATE**  | new value            | old value       |
| **BEFORE DELETE** | ❌ Not available      | old value       |
| **AFTER DELETE**  | ❌ Not available      | old value       |

Note on After Triggers, you cannot do this: 
You cannot modify `NEW.field1` in an AFTER trigger — MySQL will throw an error if you try.
```sql
CREATE TRIGGER sampl
AFTER INSERT ON sam
FOR EACH ROW
SET NEW.field1 = 'override_val?'; -- ❌ Error: not allowed
```
✅ In AFTER triggers, the row is already inserted into the table, so:

`NEW.field1` is read-only

- You can use it to:
  - Log
  - Insert into audit tables
  - Notify systems
- But you cannot change its value post-insert( overhead and Risk recursion if not carefully managed (but MySQL prevents infinite **recursion** by default)).

- Btw you can change indirectly using `update` statement, but Updating the same table in an AFTER trigger can: 
  -  cause performance overhead  
  -  risk of recursion if not carefully managed (but MySQL prevents infinite **recursion** by default).


---


- Show triggers: 
  ```sql
  SHOW TRIGGERS FROM database_name;
  -- OR 
    SHOW TRIGGERS; -- this will show triggers from the current database
  ```
  `NEW.` OR `OLD.` Explanation:
  - `NEW.`: Refers to the new row being inserted or updated.
  - `OLD.`: Refers to the existing row being updated or deleted.
- Example of a trigger that checks if a new row has a valid email before inserting it:
  ```sql
  CREATE TRIGGER check_email_before_insert
  BEFORE INSERT ON users
  FOR EACH ROW
  BEGIN
      IF NEW.email NOT LIKE '%_@__%.__%' THEN
          SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid email format';
      END IF;
  END;
  ```
  - `SQLSTATE '45000'` is a SQL error code that indicates a client-side error. This also prevents the insert operation if the condition is not met.