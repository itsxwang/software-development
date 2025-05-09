# [What is Db Normalization?](https://youtu.be/GFQaEYEc8_8?si=93FHnhN5UbVnowdx&t=7)

Normalization is a process in relational database design that organizes data to reduce redundancy and improve data integrity.

It breaks large, unstructured tables into smaller, well-structured ones and defines relationships between them.

## 🎯 Goals of Normalization:

- ✅ Eliminate data redundancy (duplicate data)

- ✅ Ensure data dependencies make sense (data is stored - logically)

- ✅ Improve data integrity and consistency

- ✅ Simplify maintenance and updates

## 🔢 [Normal Forms (NF)](https://youtu.be/GFQaEYEc8_8?si=eBe-WRqUzII68e1e&t=137)

Normalization is done through stages called normal forms, each addressing specific types of anomalies.

1. [**1NF First Normal Form**](https://youtu.be/GFQaEYEc8_8?si=B_SXpp4VU-anfZPA&t=237)

- [1st Violation of first normal form](https://youtu.be/GFQaEYEc8_8?si=Ocy7nmwA6aze4-dP&t=257) Using row order to convey information violates 1NF, as there is no such thing as row order RDBMS
- [2nd Violation of first normal form](https://youtu.be/GFQaEYEc8_8?si=MdAHArESJLhQud2R&t=347) Mixing Data types, within the same column violates 1NF

- [3rd way of violating first normal form](https://youtu.be/GFQaEYEc8_8?si=IQeY505cnFs4EbNQ&t=407) Table without primary keys violates 1NF
- [4th way of violating first normal form](https://youtu.be/GFQaEYEc8_8?si=hcR839mIifn9SuBU&t=467) A column whose values are not atomic violates 1NF.
- [5th way of violating first normal form](https://youtu.be/GFQaEYEc8_8?si=TPAsyEOpRA9d61W7&t=537) Storing a repeating group of data items on a single row violates 1NF.

  - **Some terms**:

    - **Data items** refer to the actual pieces of information (values) stored in the table — like "amulets", "4", "copper coins", etc.
    - A **group** in above clip means a set of related columns that represent repeating values for the same concept.
      like `Quantity_1 | Item_Type1| Quantity_2 | Item_Type2 | ... |`
      These columns form groups because each pair represents one item in the inventory **(type + quantity)**.

    - **Repeating groups** happen when the same kind of information is stored multiple times in the same row using similar column names (like Quantity_1, Quantity_2, etc.).\
       **_So, instead of having rows like this:_** `Quantity_1 | Item_Type_1 | Quantity_2 | Item_Type_2 | ... `\
      **You should have**:

```sql
| PlayerID | ItemType   | Quantity |
| ---------- | ------------ | -------- |
| jdog21     | amulets      | 2        |
| jdog21     | rings        | 4        |
| gila19     | copper coins | 18       |
| trev73     | shields      | 3        |
| trev73     | arrows       | 5        |
| trev73     | copper coins | 30       |
| trev73     | rings        | 7        |

```
So basically, here we break M:N to 1:N (`PlayerID` and `ItemType` are primary keys)

- [So here is summary of 1NF, all rules summarize](https://youtu.be/GFQaEYEc8_8?si=YyK61YMp20xwRzaL&t=597)

2. [2NF Second Normal Form](https://youtu.be/GFQaEYEc8_8?si=Q49cpH4SW8Y39i9M&t=627) 2NF is about how a table's non-key columns relate to the primary key, so essentialy what second normal form says that each non key attribute(column) in the table must be dependent on the entire primary key.

3. [3NF Third Normal form](https://youtu.be/GFQaEYEc8_8?si=hcDhAhvq56vTRWor&t=967) A non-key attribute should not depend on other non-key attribute. **Every non-key attribute(we can just say ***attribute*** too) in a table should depend on the key, the whole key, and nothing but the key.**

4. [4NF Fourth Normal form](https://youtu.be/GFQaEYEc8_8?si=urJkVQsJ95qiEHy1&t=1227)  