# 🔑 [Simple, Composite, and Compound Keys in SQL](https://youtu.be/ztHopE5Wnpc?si=F-WT5AdAq5IyLo96&t=17457)

These terms — **simple**, **composite**, and **compound** keys — describe **different types of keys** based on the **number and nature of columns involved** in uniquely identifying rows in a table.

---

## 🔹 1. Simple Key (Most common with surrogate keys, becuase we usually create only 1 column for random IDs)

A **simple key** is made up of **a single column** that uniquely identifies each row.

> ✅ It’s the most basic form of key.

### 📘 Example:
```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```
- `StudentID` is a **simple primary key**

---

## 🔹 2. Composite Key (Most common with natural keys)

A **composite key** is a **primary key** that is made up of **two or more columns**.

> ✅ All columns together **must be unique**, but **individually they may not be**.

### 📘 Example:
```sql
CREATE TABLE Enrollments (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID)
);
```
- Neither `StudentID` nor `CourseID` alone is unique
- But the **combination** is
- This is a **composite key**

---

## 🔹 3. Compound Key

A **compound key** is often used interchangeably with **composite key**, but **technically**:
> A **compound key** is a composite key where the columns(that ***making up primary key***/***part of primary key***) **also serve as foreign keys** referencing other tables.

### 📘 Example:
```sql
CREATE TABLE Enrollments (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
```

Here:
- `(StudentID, CourseID)` → **Composite key**
- And **both columns are also foreign keys** → making it a **compound key** 
- [A great example for this is junction table(intermediary table)](https://youtu.be/ztHopE5Wnpc?si=yjP1wvzuW5jFlOZy&t=17657)

---

## 🔁 Summary Table

| Key Type      | # of Columns | Uniqueness      | May Also Be FK? | Example                         |
|---------------|--------------|------------------|------------------|----------------------------------|
| Simple Key    | 1            | Yes              | Optional         | `StudentID`                      |
| Composite Key | 2 or more    | Together unique  | Not always       | `(StudentID, CourseID)`          |
| Compound Key  | 2 or more    | Together unique  | ✅ Yes            | Composite key + FKs to other tables |

