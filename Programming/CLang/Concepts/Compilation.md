Compiling is the process of converting high-level source code(instructions) into machine code that can be executed by a computer directly.
- And this process of converting source file into machine code is called **compilation**.
    - It has 4 steps:
        1. Preprocessing (preproceesd Output store in `filename.i`). In this process:
            - macros are expanded
            - header files(preprocessor directives) are expanded (header files substituted with their contents)
           - comments are removed
           - conditional compilation 
        2. Compilation (the `filename.i` is converted into `filename.s`)
        3. Assembling (the `filename.s` is converted into `filename.o`)
        4. Linking (the `filename.o` is converted into `filename.exe`(or depending on the operating system))
        
         > Note: You can see these intermediary files that are created during this compilation process, using `gcc -save-temps filename.c -o filename`.


[compiling-a-c-program-behind-the-scenes in detail](https://www.geeksforgeeks.org/compiling-a-c-program-behind-the-scenes/) 

- [The video](https://youtu.be/ksJ9bdSX5Yo?si=7cCjQ0B7ywp753fs)