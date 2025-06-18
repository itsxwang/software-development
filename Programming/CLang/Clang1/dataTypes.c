#include <stdio.h>
#include <limits.h> // this header file give us pre symbolic constants, that used to determine the range of data types

// total data types in C (https://youtu.be/p0QUmC2WJwM?si=SLr5xju10P9ZXuCo)
// sizeof is a unary operator that returns the size of a data type, variable, expression, or function in bytes, it is not function but it can be treated that way

int main(void)
{
    // check range of datatypes -> (https://youtu.be/bUryucFPC6I?si=bkxm0afciT8iwx1R) 
    int var_1 = INT_MAX;
    printf("max value of int is %d\n",var_1);
    
    
    int a = 7; // as generally int take 4 bytes in memory, a will be 4 bytes in memory
    // signed int a = 7, same as above line

    printf("Size of int is %zu bytes\n", sizeof(a));
    // now see you can also use %d (used for signed int) or %u (used for unsigned int) to print size of data types
    // %zu (used for printing size_t values),
    // The z modifier tells printf that the argument is of type size_t.
    // u means unsigned decimal integer.
    // So %zu is the correct way to print values returned by sizeof or of type size_t.

    unsigned int uvar = 7;
    printf("%u\n",uvar);

    // excedding valid range of data types (https://youtu.be/nwfoxcXgs8o?si=QfDdTVOEjmm0miwI)
}