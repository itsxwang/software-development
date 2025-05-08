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
  - [1st Violation of first normal form](https://youtu.be/GFQaEYEc8_8?si=Ocy7nmwA6aze4-dP&t=257) Using row order to convey information violation 1NF, as there is no such thing as row order RDBMS
  - [2nd Violation of first normal form](https://youtu.be/GFQaEYEc8_8?si=MdAHArESJLhQud2R&t=347) Mixing Data types, within the same column violates 1NF

  - [3rd way of violating first normal form](https://youtu.be/GFQaEYEc8_8?si=IQeY505cnFs4EbNQ&t=407) Table without primary keys violates 1NF
  - [4th way of violating first normal form](https://youtu.be/GFQaEYEc8_8?si=hcR839mIifn9SuBU&t=467) A column whose values are not atomic violates 1NF.
  - [5th way of violating first normal form](https://youtu.be/GFQaEYEc8_8?si=TPAsyEOpRA9d61W7&t=537) Storing a repeating group (A group in this context means a set of related columns that represent repeating values for the same concept) of data items on a single row violates 1NF.
    - Note: Repeating groups happen when the same kind of information is stored multiple times in the same row using similar column names (like Quantity_1, Quantity_2, etc.).