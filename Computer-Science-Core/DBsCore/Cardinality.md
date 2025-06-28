# [Cardinality](https://youtu.be/ztHopE5Wnpc?si=bUbUvpddJMNGYpHm&t=19057)

In the context of databases and ER modeling, cardinality refers to the **number of instances(rows) of one entity(table)** that can or must be associated with each or more instances of another entity.

- So Instance refers to a single, specific record (or row) in a table
    - So when we say:

> "One student can enroll in many courses"

We're saying:

> "One instance of the Student entity can relate to many instances of the Course entity."




# 📌 Types of Cardinality:

| Type                    | Description                                                              | Example                                                                     |
| ----------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **One-to-One (1:1)**    | One record in Entity A is related to one and only one record in Entity B | Each **person** has one **passport**                                        |
| **One-to-Many (1\:N)**  | One record in Entity A is related to many records in Entity B            | One **department** has many **employees**                                   |
| **Many-to-Many (M\:N)** | Records in Entity A can relate to many in Entity B, and vice versa       | Students **enroll** in many **courses**, and courses have many **students** |

## 🎯 Why Cardinality Matters:
- Helps in designing relationships between tables
- Affects how you define foreign keys
- Influences normalization and data integrity