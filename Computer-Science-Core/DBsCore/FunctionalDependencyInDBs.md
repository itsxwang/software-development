x- 1.  ***📘 What is Functional Dependency in Databases?***

A functional dependency (FD) is a relationship that exists when **one attribute uniquely determines another attribute** in a relational database.

> If you know the value of column `A`, then you can determine the value of column `B`.


Written as:
`A → B`

This means `B` is functionally dependent on `A`.


## ✅ Example 1: Simple FD

Consider this table `Employees`

| EmpID | Name    | Department |
| ----- | ------- | ---------- |
| 101   | Alice   | HR         |
| 102   | Bob     | IT         |
| 103   | Charlie | Finance    |

Here:

```
EmpID → Name
EmpID → Department
```

Because:
Each `EmpID` uniquely determines a `Name` and `Department`.

## 🔗 Types of Functional Dependencies

| Type                           | Description                                                              |
| ------------------------------ | ------------------------------------------------------------------------ |
| **Trivial**                    | `A → B` is trivial if B is a subset of A. Example: `EmpID, Name → EmpID` |
| **Non-trivial**                | `A → B` is non-trivial if B is **not** a subset of A                     |
| **Full Functional Dependency** | B is fully dependent on A, and not on any **subset** of A                |
| **Partial Dependency**         | B depends on a **part** of a composite key (violates 2NF)                |
| **Transitive Dependency**      | If A → B and B → C, then A → C (violates 3NF if B is not a key)          |


----

## 🔍 Visual Example:
Imagine this:

`StudentID → StudentName` (***We can say `StudentName` has functional dependency on `StudentID`***)
So, if you know the `StudentID`, you can always find out the `StudentName`.

If there are two rows with the same `StudentID`, their `StudentName` must also be the same — otherwise the FD is violated.

----
