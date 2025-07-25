- [Commons table expression](https://youtu.be/cnzka7kF5Zk?si=3JVJvtZG8GfW11pn&t=16037) is a temporary result set that you can define within a query to simplify complex SQL statements.

```sql
WITH cte_name (optional_column_list)  AS (
    ---  CTE query expression

)

--- Main query referencing CTE

SELECT ...
FROM cte_name
WHERE...
```
Note: **CTEs** are not persistent objects in the database — they are temporary result sets used only within the scope of a single query.If You Want a Persistent Version
Use a VIEW instead of a CTE:

```sql
WITH emp_avg(department, avg_salary) AS (
    SELECT dept, AVG(salary)
    FROM employees
    GROUP BY dept
)
SELECT * FROM emp_avg;
```
Now the CTE result will have columns named `department` and `avg_salary` instead of default column names return by query.

