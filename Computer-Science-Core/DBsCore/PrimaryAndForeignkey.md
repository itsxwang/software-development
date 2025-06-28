# [First, what are Keys in Databases, and some properties of keys](https://youtu.be/ztHopE5Wnpc?si=ayqsFEk_VjgPkQnT&t=10517)

- [Primary key index, key is a type of index, so in this video key is referred to primary key](https://youtu.be/ztHopE5Wnpc?si=fKjgFN3w6I4oc8Fx&t=11277)

# 🔑 Primary Key (PK)
## ✅ Definition:
A **primary key** is a column (or a set of columns) that uniquely identifies each row in a table.

## ✅ Properties:
- Must be unique
- Cannot be NULL
- [Only one primary key(or composite primary key) per table for one row](https://youtu.be/ztHopE5Wnpc?si=o8X71qHjuSkrUpE0&t=15807)(***"Each row must have a unique value for the entire primary key column (whether it's one column or multiple columns of primary key)."***)
    - Example: 
      Composite Primary Key (Multiple Columns of primary key) ✅
        ```sql
        CREATE TABLE Enrollments (
        StudentID INT,
        CourseID INT,
        PRIMARY KEY (StudentID, CourseID)
        );
        ```
        Neither `StudentID` nor `CourseID` is unique on its own.

      But the combination `(StudentID, CourseID)` is unique → one student can 
      enroll in a course only once.\
       **So what's important to understand here is** :\
        **In a composite primary key, it’s not about the uniqueness of
        individual columns** — ***it’s about the uniqueness of the combination.*** Like for example, 2 or more students Ids can take same course Id, because the combination we get will still be unique.
  
- Often named `id`, `UserID`, `OrderID`, etc.


📌 Example:
```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT
);
```

Here, `StudentID` is the primary key — no two students can have the same `StudentID`.

----

# 🔗 Foreign Key (FK)
## ✅ Definition:

A [**foreign key**](https://www.youtube.com/watch?v=ztHopE5Wnpc&t=16697s) is a column (or a set of columns) that creates a relationship between two tables — it references the primary key in another table. [But keep in mind that every foreign key column must only reference one table.](https://youtu.be/ztHopE5Wnpc?si=l1a_zRhySbaTftHi&t=15837)


## ✅ Properties:
- Can be NULL ([but you can explicitely defined that it can’t be NULL, that what we called **not null foreign key**](https://youtu.be/ztHopE5Wnpc?si=AazCTJLRANIkfWlV&t=15957))
- Can have duplicate values
- Ensures referential integrity (prevents invalid references)
- [Foreign keys can update unlike primary keys, because references can change of primary keys(may primary key(of other table) pointing to some other value before, now pointing to some other value)](https://youtu.be/ztHopE5Wnpc?si=sFjjKaQCgZZL5F3z&t=16077)

📌 Example:
```sql
CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);
```

**Here:**

`StudentID` is a foreign key in the `Enrollments table`

It references the `StudentID` in the `Students` table

It ensures that you can’t enroll a student who doesn’t exist in the `Students table`



----


# ⚖️ Summary Table:

| Feature         | Primary Key             | Foreign Key                         |
| --------------- | ----------------------- | ----------------------------------- |
| Purpose         | Uniquely identify a row | Link to another table’s primary key |
| Unique values   | ✅ Yes                   | ❌ Not required                      |
| Allows NULLs    | ❌ No                    | ✅ Yes (optional)                    |
| Count per table | ✅ One only              | ✅ Multiple allowed                  |
| Enforces        | **Entity integrity**    | **Referential integrity**           |


----

**Example**: 

# Scenario: A University System

🏫 1. Students Table\
Each student is uniquely identified by their Student ID.

| StudentID | Name  | Age |
| --------- | ----- | --- |
| 101       | Alice | 20  |
| 102       | Bob   | 22  |


- 🔑 `StudentID` is the primary key:\
**It’s like each student’s roll number — unique and cannot be missing.**

📘 2. Courses Table
Each course has a unique Course ID.

| CourseID | CourseName |
| -------- | ---------- |
| C1       | Math       |
| C2       | Physics    |

- 🔑 `CourseID` is the primary key here.

# 📝 3. Enrollments Table
Tracks which student is enrolled in which course.

| EnrollmentID | StudentID | CourseID |
| ------------ | --------- | -------- |
| 1            | 101       | C1       |
| 2            | 102       | C2       |
| 3            | 101       | C2       |


- 🔑 `EnrollmentID` is the primary key.

- 🔗 `StudentID` and `CourseID` are foreign keys:

- They link back to `Students.StudentID` and `Courses.CourseID`.

- They make sure the enrollment only includes valid students and valid courses.