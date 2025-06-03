#include <stdio.h>
#include <ctype.h>
#include <math.h>


// checkout `manual.cs50.h` to checkout frequently used header files



int main(void) {
    
    printf("%d", isalpha('1'));
    // %d is a format specifier used for signed decimal integers.
    //  It acts as a placeholder for an integer argument in formatted input and output statements, primarily used with printf() and scanf() functions
    // 7 will be ignored because we not give format specifier for second arg
    return 0;
}

// to run the file g++(or any compiler you using) filename -o executable_name
// so compiler do compilation
// And compilation is a process of converting high level source code to machine code
// Machine code consist of binary instructions specific to a computer's architecture. 
// It is a low level code that computer cpu can understand directly