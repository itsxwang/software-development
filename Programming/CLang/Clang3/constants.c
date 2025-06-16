// Constants In C:-  (https://youtu.be/BVnNg20AuYU?si=Hb4nanif0_qtmjq4)

// Can be define with  

// 1. `#define` keyword -> use when we want to define a macro
// 2. `const` keyword -> use when we want to define a constant variable

// syntax of define : #define name value
// the name we give to #define also called a macro
// the job of preprocessor(that done in preprocessing stage) is to replace name with its value, also it resolve header files name with its acutual content


#include <stdio.h>
#define PI 3.14159

// we can use macros as functions
#define add(a, b)  a + b 
// you can also write multiple lines using `\` in macro (https://youtu.be/BVnNg20AuYU?si=fP-V8QPQlYWbQAK9&t=357) 

#define hiHello (void) printf("Hello\n"); \
    printf("World\n");


// macros are expanded in preprocessing stage, means code inside them put inplace of macro invokation at compile time

// first expansion and then evaluation -> (https://youtu.be/BVnNg20AuYU?si=SYdWfto9YWcIFIa8&t=407)
// means first macro code expand and then the code evaluate

// some predefine macros  -> https://youtu.be/BVnNg20AuYU?si=xixXPwBv8xFf8fi6&t=477

// using const keyowrd -> https://youtu.be/I1i0WgiRVXo?si=EZHzpzwcSF9bDL7n&t=47

const float gravity = 9.81;
int main()
{
    hiHello;
    add(1, 2);
    printf("%f\n", PI);
    printf("Time: %s\n", __TIME__);
    printf("%f\n", gravity);
    return 0;
}
