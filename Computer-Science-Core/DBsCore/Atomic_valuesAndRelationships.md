# [Atomic values](https://youtu.be/ztHopE5Wnpc?si=mi91NHhu-KSEdED4&t=5937)

## ✅ Atomic Value = Indivisible / Smallest Meaningful Unit of Data

An **atomic value** is a value in a table cell that cannot or should not be broken down further according to the rules of the database.

## 🔍 Why it's important:
- Atomic values are a key part of First Normal Form (1NF) in database normalization, they help maintain data integrity and simplify querying.

- 1NF requires each field (column) to contain only atomic (single) values — no sets, lists, or nested values.
 

----

# [Relationships](https://youtu.be/ztHopE5Wnpc?si=mCLXwDHx7Id1TX9-&t=6267)

In databases, relationships describe how tables are connected to each other based on common data. Relationship is a logical association between two or more tables, typically formed through primary and foreign keys.

### 🧱 Types of Relationships(Here we talking about types of Binary Relationships):

***A binary relationship in a database refers to a relationship between two entities (or two tables). Most common in RDBs*** It can be 1:1, 1:N, or M:N — but always **between two tables only**.

### 1. One-to-One (1:1)
- **Definition**: Each row in Table A matches exactly one row in Table B.
- **Occurrence**: Rare in practice.
- **✅ Example**: Each person has one passport.
- [Designing 1:1 relationships](https://youtu.be/ztHopE5Wnpc?si=6RQIFRNsBm-C5VF7&t=7347)
- [1:1 relationship in multiple tables](https://youtu.be/ztHopE5Wnpc?si=gNy_8AO0Y0tJMAxc&t=7597)
- [And if we have 1:1 relationship, then its not required to make 2 separate tables, we can also make single table, because in 1:1 relationship the primary keys will not be duplicated](https://youtu.be/ztHopE5Wnpc?si=9SEFiTZARK71VMP-&t=8697)

### 2. One-to-Many (1:N)
- **Definition**: One row in Table A can be related to many rows in Table B, but 1 row in Table B will only be related to one row in Table A.
- **Occurrence**: Most common.
- **✅ Example**: One customer can place many orders, but 1 order can only be placed by one customer.
- [Designing 1:N relationships](https://youtu.be/ztHopE5Wnpc?si=AaA-n7JmoGLOUoOe&t=8027)
- In SQL we can implement this using joins(cross, inner, left, right join)

#### 📌 Example Table of 1 to many relationships:
**Customers Table**:

| CustomerID | Name  |
| ---------- | ----- |
| 1          | Alice |
| 2          | Bob   |


**Orders Table**:

| OrderID | CustomerID | Product    |
| ------- | ---------- | ---------- |
| 101     | 1          | Laptop     |
| 102     | 1          | Smartphone |
| 103     | 2          | Headphones |



Relationship:
`Customers.CustomerID` → `Orders.CustomerID`\
This is a One-to-Many relationship.

-----
[Parent Tables and Child Tables](https://youtu.be/ztHopE5Wnpc?si=6gqsKtSigol1Dx54&t=8627)

-----


### 3. Many-to-Many (M:N)
- **Definition**: Rows in Table A can relate to many in Table B, and vice versa too (both ways).
- **Implementation**: Achieved using a junction table.
- **✅ Example**: Students enroll in many courses, and each course has many students. 
- [MySQL Example of Many-to-Many (M:N) relationship](https://youtu.be/Hy3qbMAoEJk?si=6a8ux_2JLNtDD_p-&t=20777)
- Note:  **Many-to-Many (M:N)** relationships do work in relational databases — but not directly.
Relational databases do not support **M:N** relationships natively.
Instead, you implement them indirectly using an intermediate ***(junction/bridge)*** table.
- [Designing M:N relationships](https://youtu.be/ztHopE5Wnpc?si=0uOkD_9UQeta8GDz&t=9087)

#### ❌ Not allowed directly:
You cannot put a list of courses inside a single Student row or vice versa — that would violate First Normal Form (1NF) (atomic values only).

**Example**: 

***Students Table***

#### ✅ Correct implementation using a junction table:
| StudentID | Name  |
| --------- | ----- |
| 1         | Alice |
| 2         | Bob   |


***Courses Table***
| CourseID | CourseName |
| -------- | ---------- |
| 101      | Math       |
| 102      | Science    |


***StudentCourses (junction table)***

| StudentID | CourseID |
| --------- | -------- |
| 1         | 101      |
| 1         | 102      |
| 2         | 101      |

**This breaks the M:N relationship into two 1:N relationships, which relational databases can handle easily.**


- [Summary of Realationships](https://youtu.be/ztHopE5Wnpc?si=8-LBJRkYuNs6uqIp&t=9987)

- [Understand Binary realtionship between tables](https://youtu.be/ztHopE5Wnpc?si=n5vBMSC2rIwmWs3-&t=10427)

---

### ✅ In summary:
> - A relationship in a database shows how rows in one table correspond to rows in another, enabling you to combine and query related data.

