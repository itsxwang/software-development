To print the value of a variable in MySQL, you can use the SELECT statement. For user-defined variables, you can simply select them using SELECT @variable_name;.
## Examples

### Printing User-Defined Variables

To print the value of a user-defined variable (e.g., `@myId`):

```sql
SET @myId = 7;
SELECT @myId;
```

### Printing System Variables

You can display the value of a system variable using the `SHOW VARIABLES` statement with a `LIKE` clause. For example, to show the value of `max_allowed_packet`:

```sql
SHOW VARIABLES LIKE 'max_allowed_packet';
```

Alternatively, you can use the `SELECT` statement with the `@@` prefix for a more concise output:

```sql
SELECT @@max_allowed_packet;
```