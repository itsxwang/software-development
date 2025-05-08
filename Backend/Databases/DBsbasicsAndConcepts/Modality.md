# 🔍 [Modality](https://youtu.be/ztHopE5Wnpc?si=dohWsAv-Rf8PpRhh&t=19477)



In the context of **ER modeling and databases**, **modality** (also called **optional participation**) refers to whether **participation in a relationship is mandatory or optional** for an entity.

---

## 📌 Modality Explained

It answers the question:  
> **"Is the relationship required?"**

### 🔸 Two Types of Modality:

| Modality Type | Description                                         | Example                                              |
|---------------|-----------------------------------------------------|------------------------------------------------------|
| **0 (Optional)**  | An entity **may or may not** participate in a relationship | A professor **may or may not** be assigned to a course |
| **1 (Mandatory)** | An entity **must** participate in the relationship (Foreign Key with NOT NULL constraint)           | A course **must** be taught by a professor            |

---

## ✅ Example

Consider the relationship between `Employee` and `Department`:

- **Modality of Employee**: 1 → every employee **must** belong to a department
- **Modality of Department**: 0 → a department **may exist** even if it has no employees

---

## 🔁 Relation to Cardinality

- **Cardinality** = instances(rows in ER Modelling) of one entity re(e.g. one-to-many) related to how many instances of another entity(table in ER modelling) 
- **Modality** = *whether* participation is optional or required
