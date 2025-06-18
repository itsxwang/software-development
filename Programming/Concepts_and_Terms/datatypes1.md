[Know size programatiicaly of data type in C](https://youtu.be/_9bAlgRzlkc?si=DCGot5EXLF3vbMvW)

[Base 10 decimal system (0 to 9)](https://youtu.be/_9bAlgRzlkc?si=HfiAVNmx3vY9YB04&t=107)

[Range of 4 bit data](https://youtu.be/_9bAlgRzlkc?si=ZuolAfoaIQz8piQV&t=267)
  - 0000 to 1111 (0 to 15) 
- [Formula of calculate maximum value of any n bit of data](https://youtu.be/_9bAlgRzlkc?si=ZSolr5N73tVsxObe&t=327)
    - ```math
        2^n - 1 (where n is number of bits)
        ``` 
        For example if we have 4 bit data then 2^4 - 1 = 15 (that is max value)
    - [For example calculate range of int](https://youtu.be/_9bAlgRzlkc?si=fY8SpnICtr8jcpQ1&t=357)
    - The range of signed int -> $-(2^{n-1})$  to $+(2^{n-1} - 1)$
     (n is the number of bits integer going to take in your architecture)

- In C by default when you write `int varname;` is singned integer variable.  