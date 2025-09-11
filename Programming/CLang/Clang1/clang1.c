// Understand this program -> https://youtu.be/aZb0iu4uGwA?si=YXpHvRTcAOUzodLr&t=2167

// these also called to be preprocessor directives,which tells the compiler we have to import some funtions,macros,etc..., which will be helpful in running main function
#include <stdio.h>
#include <ctype.h>
#include <math.h>

// checkout `manual.cs50.h` to checkout frequently used header files

// ""(for string)

int main()
{

    printf("red\n");

    // %d is a format specifier used for signed decimal integers.
    //  It acts as a placeholder for an integer argument in formatted input and output statements, primarily used with printf() and scanf() functions
    // 7 will be ignored because we not give format specifier for second arg

    // Now we define variable
    int a = 7; // as generally int take 4 bytes in memory, a will be 4 bytes in memory
    printf("%d\n", a);

    char c = 'a'; // as generally char take 1 byte in memory, c will be 1 byte in memory

    printf("%c\n", c); // a
    printf("%d\n", c); // 97
    // Why does printf("%d", c); print 97?
    // - The format specifier %d tells printf to interpret the argument as an int.
    // - When a char is passed to printf, it gets promoted to an int due to default argument promotions in variadic functions like printf.
    // - So you're effectively printing the integer value of 'a'(to be precise ASCII value), which is 97.


    // and one more thing about format specifiers, that if you want to print a float value, and use %d, you will get data loss

    return 0; // return 0 typically indicates that the program has executed successfully
}

// some reserved keywords in c -> https://youtu.be/aZb0iu4uGwA?si=5e7dnu_P4xXhkpfo&t=3207

// ----- run the file ------
// to run the file gcc(or any compiler you using) filename -o executable_name
// so compiler do compilation
// And compilation is a process of converting high level source code to machine code
// Machine code consist of binary instructions specific to a computer's architecture.
// It is a low level code that computer cpu can understand directly