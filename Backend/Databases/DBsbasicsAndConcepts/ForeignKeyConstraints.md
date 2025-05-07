# [What are foreign key constraints?](https://youtu.be/ztHopE5Wnpc?si=1g0bNIUMZzG2fwc1&t=16857)

A **foreign key constraint** is a **rule in relational databases** that **ensures referential integrity** between two tables.

> ✅ It means a value in one table must match a value in another table — or be NULL if allowed.

The foreign key constraint ensures that:
- You **can’t insert a value** in the foreign key column that doesn’t exist in the referenced (parent) table (Basically if no such primary key not exist in the parent table).

- You can’t delete a referenced row in the parent table unless you handle it explicitly (via ON `DELETE`, `CASCADE`, `RESTRICT`, etc.).

## 🧠 Example:
Parent Table: `Departments`

```sql
CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(100)
);
```

Child Table: `Employees`
```sql
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100),
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);
```

Here:

- `Employees.DeptID` is a foreign key
- It references `Departments.DeptID`
- You can’t insert an employee with a `DeptID = 999` if no such department exists

## 🚫 Example of Violation:
```sql
INSERT INTO Employees (EmpID, Name, DeptID)
VALUES (1, 'Alice', 999); -- ❌ Error! DeptID 999 does not exist.
```


## 🔁 Options for Deletion / Update Behavior:

| Option               | Description                                         |
| -------------------- | --------------------------------------------------- |
| `ON DELETE CASCADE`  | Deletes child rows when parent is deleted           |
| `ON DELETE SET NULL` | Sets the foreign key to NULL when parent is deleted (FK NOT NULL constraint should not exist) |
| `ON DELETE RESTRICT` | Prevents deletion if dependent child rows exist     |
| `ON UPDATE CASCADE`  | Updates the child FK if parent PK is updated        |
| `ON UPDATE SET NULL` | Sets the child FK to NULL if parent PK is updated (FK NOT NULL constraint should not exist)   |
| `ON UPDATE RESTRICT` | Prevents update if dependent child rows exist       |

## ✅ Benefits of Foreign Key Constraints:
- Enforce **data integrity**
- Prevent **orphaned records**
- Maintain **logical consistency** between tables