# Super Key and Candidate key

## [What is super key](https://youtu.be/ztHopE5Wnpc?si=08dUJO5g-oIjnOQM&t=12737)
- Super key is **any** number of columns that uniquely identify a row in a table.
> **✅ It can have extra columns that aren't necessary** — as long as the combination is unique.

### 📌 Example:
Given this table `Employees`:
| EmpID | Name  | Email                                     |
| ----- | ----- | ----------------------------------------- |
| 1     | Alice | [alice@email.com](mailto:alice@email.com) |
| 2     | Bob   | [bob@email.com](mailto:bob@email.com)     |


- `EmpID` alone is a **superkey (uniquely identifies rows)**.
- `(EmpID, Email)` is also a superkey (still uniquely identifies rows, but has extra column).
- Even `(EmpID, Name, Email)` is a superkey, but it's not efficient.





## [What is candidta key](https://youtu.be/ztHopE5Wnpc?si=AItKoWyTX2eDJ8FE&t=13257)

- Candidate key is **least** numeber of columns that uniquely identify a row in a table.

> ✅ It’s the best possible option(s) to be chosen as a primary key.

📌 In the same table:
- `EmpID` → ✅ Uniquely identifies each row & is minimal → Candidate Key
- `Email` → ✅ Also unique & minimal → Candidate Key
- `(EmpID, Email)` → ❌ Not minimal → Not a candidate key (but still a superkey)


# 🔁 Relationship Between Them:
| Concept           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| **Superkey**      | Any key (single or composite) that uniquely identifies rows |
| **Candidate Key** | Minimal superkey — no unnecessary columns                   |
| **Primary Key**   | A candidate key chosen by the DB designer as the main key   |


> ✅ Every candidate key is a superkey\
❌ But not every superkey is a candidate key


# 🧠 Summary Table:
| Key Type      | Uniqueness | Minimal | Can Be Chosen as PK |
| ------------- | ---------- | ------- | ------------------- |
| Superkey      | ✅ Yes      | ❌ No    | ❌ Not always        |
| Candidate Key | ✅ Yes      | ✅ Yes   | ✅ Yes               |
| Primary Key   | ✅ Yes      | ✅ Yes   | ✅ Chosen from CKs   |


## Alternate Keys

The other keys that we not use as primary key from CKs are called **Alternate Keys** and can be used for **lookups** or **constraints**.


# 🔐 Why Use Alternate Keys?
- They can be enforced with a **UNIQUE** constraint to ensure no duplicates
- Still useful for **searching**, **referencing**, or **joining**
- Maintain data integrity

```sql
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE -- This enforces the alternate key
);
```