- [Look up Table](https://youtu.be/ztHopE5Wnpc?si=3SkAhIaMXui5C3Ww&t=11617)

# 🔎 What is a Lookup Table?
**A lookup table is a small reference table used to store fixed, standardized values that are referred to by other tables using foreign keys.**

> Think of it as a dictionary table that helps normalize your data and improve data consistency.

✅ Why use a Lookup Table?
- Avoid repetition of the same string/value in many rows
- Ensure consistency (no spelling mistakes or invalid values)
- Easier maintenance (update values in one place)
- Helps follow database normalization (usually 2NF)


# 🧠 Example Scenario:
**Without Lookup Table:**

```plaintext
Table: Employees
+------------+-------------+
| EmpID      | Department  |
+------------+-------------+
| 1          | HR          |
| 2          | Finance     |
| 3          | HR          |
| 4          | IT          |
```

- The `Department` column contains repeating string values.
- Risk of typos: e.g., “Hr”, “hr”, “Human Resources”


# ✅ With Lookup Table:

🎯 Lookup Table: `Departments`
```sql
CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50)
);
```

| DeptID | DeptName |
| ------ | -------- |
| 1      | HR       |
| 2      | Finance  |
| 3      | IT       |


Main Table: `Employees`
```sql
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);
```

| EmpID | DeptID |
| ----- | ------ |
| 1     | 1      |
| 2     | 2      |
| 3     | 1      |
| 4     | 3      |

> 🔗 Now the `Employees` table looks up **department names** from the `Departments` table using `DeptID`(Foreign key).

# 🔑 Key Points:

| Aspect   | Lookup Table                      |
| -------- | --------------------------------- |
| Purpose  | Store standard reference values   |
| Contains | ID (PK) + Value (e.g., name/type) |
| Used by  | Other tables via foreign key      |
| Benefit  | Normalization and consistency     |
