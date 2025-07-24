[Views](https://youtu.be/cnzka7kF5Zk?si=Wy3bd9bZPXyX21uM&t=13517)
are a set of sql statements that execute produce a result set.  

Its like a virtual table that you can query, the data in original table if change it also change in virtual table.

- `\dv` to see all views
Create view 
```sql
CREATE VIEW view_name AS
    SELECT column_name(s)
    FROM table_name;
```

Drop view
```sql
DROP VIEW view_name;
```
select fname,salary from employees group by salary,fname ;		