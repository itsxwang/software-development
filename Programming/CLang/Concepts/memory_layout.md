- [Memory layout of a c program](https://youtu.be/gegaS_gX3TY?si=UQ9oTbnXmCipjqd5&t=167)

- different parts of a program stored in different memory segments
- In text/code segment the actual machine code of the compiled program is stored. This section is read only section.
- In data segment the actual data of the program is stored. This section is read/write section.Also called to be initialized data segment.

- bss(block started by symbol) segment, if variables not being initialized then they store in this data segment, also called uninitialized data segment. 

- `size <filename.exe>`: displays the size of the file, of its text/code block and for its data block

- [Stack(and call stack) and heap](https://youtu.be/L53nqHCSSFY?si=nc-GsUDHhaWy01K7&t=47)
    - [Stack](https://youtu.be/L53nqHCSSFY?si=LNco8YYO7roZo4Hi&t=107) is a container (or memory segment) which holds some data. 
    - Data is retrieved in LIFO.
    - function(that executing) not stored inside call stack instead its activation record maintained in call stack. 
        - [Activation record means](https://youtu.be/L53nqHCSSFY?si=HyoduID37YeMxCFo&t=377)