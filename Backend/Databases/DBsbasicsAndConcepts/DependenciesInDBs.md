- 1.  ***📘 What is Functional Dependency in Databases?***

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


- [Multivalued dependency](https://youtu.be/GFQaEYEc8_8?si=pkuqgrL8qKMgUGwC&t=1327)

A Multivalued Dependency (MVD) is a special kind of dependency that occurs when one attribute in a table determines multiple independent values of another attribute, independently of other attributes.

It's written as:

```
A ⇉ B 
```

This means:

> For a single value of A, there can be multiple independent values of B.

### ✅ Real-Life Analogy
Imagine a student can have multiple phone numbers and multiple hobbies, but the phone numbers and hobbies are not related to each other.

| StudentID | PhoneNumber | Hobby    |
| --------- | ----------- | -------- |
| 101       | 555-1234    | Football |
| 101       | 555-1234    | Music    |
| 101       | 555-5678    | Football |
| 101       | 555-5678    | Music    |

Here:

- `StudentID ⇉ PhoneNumber`

- `StudentID ⇉ Hobby`


These are multivalued dependencies, because:
A student has many phones and many hobbies, but neither depends on the other.

### 📌 Key Points
- MVDs exist in addition to functional dependencies.

- They violate Fourth Normal Form (4NF).

- If a multivalued dependency exists and it's not a functional dependency, the table should be decomposed to eliminate redundancy.


### 📉 Why Are MVDs a Problem?
- They create redundant data and anomalies:
- Insertion anomaly: You must insert all combinations, even if unrelated.
- Deletion anomaly: Deleting a row may delete important unrelated info.


### 🔧 How to Fix It?
Split the table into two separate tables:

Phones Table:
| StudentID | PhoneNumber |
| --------- | ----------- |
| 101       | 555-1234    |
| 101       | 555-5678    |

Hobbies Table:
| StudentID | Hobby    |
| --------- | -------- |
| 101       | Football |
| 101       | Music    |

Now there's no unnecessary duplication.



----

## 🔍 Visual Example:
Imagine this:

`StudentID → StudentName` (***We can say `StudentName` has functional dependency on `StudentID`***)
So, if you know the `StudentID`, you can always find out the `StudentName`.

If there are two rows with the same `StudentID`, their `StudentName` must also be the same — otherwise the FD is violated.

----
