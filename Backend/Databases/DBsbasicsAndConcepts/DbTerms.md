- [**Data**, Anything we store in our database](https://youtu.be/ztHopE5Wnpc?si=eoUg1gaqL-Hm5HJM&t=4437)

- [**Database**, where we store our data in](https://youtu.be/ztHopE5Wnpc?si=ERdxNb45_NF640Ab&t=4447)

- [**RDB**(**Releational Database**), specific kind of database where data store in table](https://youtu.be/ztHopE5Wnpc?si=JNsPqiFDxmEe_2g5&t=4457)

-  [**DBMS**, Database Management System, used to control db ](https://youtu.be/ztHopE5Wnpc?si=XPIQEcmPE2fAJm1o&t=4477)

- [**RDBMS**, Relational Database Management System, specific kind of DBMS, which is just used to control tables and values within RDB](https://youtu.be/ztHopE5Wnpc?si=WC3vUlwze6Zd2VMO&t=4482)


- [**NULL**, when we there is not any value in sepcific row and column, that receives Null as a value, Null means the particular rowXcolumn is empty](https://youtu.be/ztHopE5Wnpc?si=bcmIw-FfGGV1NsVW&t=4507)

- [**Anonmalies**, errors within our data integrity, basically it means may Entity integrity or referential integrity or domain integrity is violated](https://youtu.be/ztHopE5Wnpc?si=5C25boes78XH3zQc&t=4577)

- [**Integrity**, refers to the accuracy, consistency, and reliability of data throughout its entire lifecycle, we implement database integrity, to protect dbs against anomalies](https://youtu.be/ztHopE5Wnpc?si=0b5EGKV-ht6jXUTu&t=4617)
    - ***Entity Integrity***: Each entity(row, within an table) should be unique
    - ***Referential Integrity***: All tables should have foreign key constraints(and all tables should be connected with each other), means if one row is updated in one table it should also be updated in other tables
    - ***Domain Integrity***: Each attribute(column) should contain only specific type of values

-----

# Db Design Terms
- [**Entity**, the data we store about, each entity in a table represent a specific instance of an object or concept](https://youtu.be/ztHopE5Wnpc?si=n-St1yE1DWHiM3H-&t=4701)

- [**Attributes**, things we stored about the entity](https://youtu.be/ztHopE5Wnpc?si=SdYSBg4pDWLtYzdo&t=4727)

- [**Relation**, another name for table(where we have data in db)](https://youtu.be/ztHopE5Wnpc?si=NKTstD633byAPNwW&t=4747)

- [**Tuple**, another name for **row** in a table, basically its all attributes of one entity](https://youtu.be/ztHopE5Wnpc?si=6lBr3FUiU30j23nl&t=4797)

- [**Table**, its just a physical representation of relation, tables are what we stored in our dbs to organize data](https://youtu.be/ztHopE5Wnpc?si=tx_ow3eKGy3ITWb-&t=4877)

- [**Rows** and **Columns**, within a table we have rows and columns](https://youtu.be/ztHopE5Wnpc?si=II38UyqlGrVN8we3&t=4887)

    - ***File***, another name for a table
    - ***Record***, another name for a row
    - ***field***, another name for a column

- [**Value**, a value is something we stored in a specific row X column](https://youtu.be/ztHopE5Wnpc?si=psuxfmY0XCjWPI-h&t=4967)

- **Entry**, another name for a row 

- [**Database-Design**, a process of designing your table to remove/prevent anonmalies from your database and to implement data integrity in your database](https://youtu.be/ztHopE5Wnpc?si=CZ64ZwSvR2_vt7LI&t=5027)

- **Schema**, is the structure or blueprint that defines how data is organized in a database. The **schema** is the plan or design of a database — it tells the database what kinds of data exist and how they relate.

- [**Normalization**, are the bunch of steps we going to follow to help us get best db design](https://youtu.be/ztHopE5Wnpc?si=9Br4PcXxPypqf1ui&t=5057)

- [**Naming conventions**, conventions used for naming in dbs realm](https://youtu.be/ztHopE5Wnpc?si=xBrYiF913NRZh66Y&t=5087)

- [**Keys**, are basically something that is used to make everything unique in the table](https://youtu.be/ztHopE5Wnpc?si=ru6AVi5qUQn8uYS4&t=5117)

----

Some more Db Terms

- [**SQL**, Structured Query Language, is a language used to communicate with databases](https://youtu.be/ztHopE5Wnpc?si=7wvJ4yU0e9GvP1tI&t=5167)

    - [**DDL**, Data Definition language, is a part of SQL, used to define dbs](https://youtu.be/ztHopE5Wnpc?si=HqqEykd2W8aDi8_r&t=5347)

    - [**DML**, Data Manipulation Language, is a part of SQL, used to manipulate dbs](https://youtu.be/ztHopE5Wnpc?si=4kqiRUQRjT3ICUDw&t=5367)


    - [**SQL keywords**](https://youtu.be/ztHopE5Wnpc?si=uSvDZupiv-72JdrB&t=5387)

- [**Frontend of an App**, especially explained about in realm of db, we program frontend so user not have to do sign-in to server and use SQL code to get, post, etc., data from db](https://youtu.be/ztHopE5Wnpc?si=VTTBIOXXcKnjBCir)

- [**Backend of An App**, server side code, basically used to connect frontend to db](https://youtu.be/ztHopE5Wnpc?si=_ssuVrwhVGIPl7-R&t=5467)

- [**Client**](https://youtu.be/ztHopE5Wnpc?si=rZcQxvEh1WdGILvd&t=5597)

- [**SSSL**, Used to communicate from client side to server side, using server side scripting language](https://youtu.be/ztHopE5Wnpc?si=FSFbX9ahUNZpqhUL&t=5657)

- [**Custom Views**, so view is basically taking data from db and illustrate it in some different way](https://youtu.be/ztHopE5Wnpc?si=mvKZfvQijsOdN73H&t=5687)

-  [**Joins**, views often use joins, which basically connect data from multiple tables to create a new table, for joins we need unique keys and those keys should same for specific entity in all tables, and that key should be unique for every entity, and in this we can connect tables through **foreign key connection**](https://youtu.be/ztHopE5Wnpc?si=KQB10KSB0sUpFfMz&t=5757)