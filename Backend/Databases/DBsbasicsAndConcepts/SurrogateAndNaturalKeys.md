# 🔹 What is a Natural Key?
A natural key is a column (or combination of columns) **that naturally exists in the data and can uniquely identify each row.**

> ✅ It comes from the real-world domain of the data.

- Here, `SSN` (Social Security Number) or `Email` could be used as a **natural key** because they are already unique and meaningful.

```plaintext
Table: Employees
+----------+--------------+------------------+
| SSN      | Name         | Email            |
+----------+--------------+------------------+
| 123-45-6789 | Alice     | alice@email.com  |
| 987-65-4321 | Bob       | bob@email.com    |
```

# 🔹 What is a Surrogate Key?
A **surrogate key** is a synthetic, meaningless, auto-generated ID that has no business meaning, used only to uniquely identify rows.

> ⚠️ It’s not derived from actual data. It’s usually an auto-incrementing number (like an ID column).

## 📘 Example of Surrogate Key:

```plaintext
Table: Employees
Table: Employees
+--------+--------------+------------------+-------------+
| EmpID  | Name         | Email            | SSN         |
+--------+--------------+------------------+-------------+
| 1      | Alice        | alice@email.com  | 123-45-6789 |
| 2      | Bob          | bob@email.com    | 987-65-4321 |
```

- EmpID is a surrogate key — it means nothing on its own, but is used for indexing and linking.

- Email or SSN could be natural keys.

## 🔁 Comparison Table:

| Feature            | Surrogate Key                      | Natural Key                             |
| ------------------ | ---------------------------------- | --------------------------------------- |
| Derived from data? | ❌ No (auto-generated)              | ✅ Yes (from meaningful columns)         |
| Business meaning?  | ❌ None                             | ✅ Has meaning                           |
| Stability          | ✅ Stable (not likely to change)    | ❌ May change if real-world data changes |
| Simplicity         | ✅ Simple (usually a single column) | ❌ May require multiple columns          |
| Example            | `EmpID`, `UserID`                  | `Email`, `SSN`, `Username`              |


## 🧠 Which one to use?
- ✅ Use surrogate keys when:

    - Natural keys are large or changeable
    - You want a consistent pattern across all tables

- ✅ Use natural keys when:
    - The column is truly unique, stable, and meaningful (like SSN or Email)


- [Which should be used from surrogate and natural key](https://youtu.be/ztHopE5Wnpc?si=Y8hSXO1zVwuNyRp8&t=14627)

