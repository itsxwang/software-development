# 🧠 [Entity-Relationship (ER) Modeling](https://youtu.be/LowjDtiNlk4?si=mKKODr9k4lZ5g4iM)

**Entity-Relationship (ER) Modeling** is a **visual design approach** used to **model the structure of a database** by defining the key elements:

---

## 🔷 What it Does

It shows **entities**, their **attributes**, and the **relationships** between them — typically in the form of an **ER diagram** (ERD).

---

## 📌 Key Components

| Concept         | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Entity**      | A thing or object (real-world or abstract) that we want to store data about |
| **Attribute**   | A property or characteristic of an entity                                   |
| **Relationship**| A logical connection between two entities                                   |

---

## 📘 Example

Let’s say you want to model a university database:

### 🔸 Entities(We referred to here Tables):
- `Student`
- `Course`
- `Professor`

### 🔸 Attributes(What those tables attributes(columns) going to be):
- **Student**: `StudentID`, `Name`, `Email`
- **Course**: `CourseID`, `Title`, `Credits`
- **Professor**: `ProfID`, `Name`, `Department`

### 🔸 Relationships:
- `Student` **enrolls in** `Course` (Many-to-Many)
- `Professor` **teaches** `Course` (One-to-Many)

---

## 🎯 Why Use ER Modeling?

- To **plan** your database before creating tables
- To **understand relationships** between data
- To **identify primary and foreign keys**
- To **normalize** data and avoid redundancy


----

Steps for creating ERDs:
1. [Extracting information requirements](https://youtu.be/LowjDtiNlk4?si=txISd48XPYi4yZtg&t=57)
   - [Database need to keep track of relationship between things](https://youtu.be/LowjDtiNlk4?si=P2QA7LJFdaICzWB0&t=177)

2. [Cardinality, means how many of one thing are associated with how many of another thing](https://youtu.be/LowjDtiNlk4?si=68yzWrzknd8hOuTz&t=247)