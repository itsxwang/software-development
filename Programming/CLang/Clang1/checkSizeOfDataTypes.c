#include <stdio.h>
// total data types in C (https://youtu.be/p0QUmC2WJwM?si=SLr5xju10P9ZXuCo)

int main(void) {
    int a = 7; // as generally int take 4 bytes in memory, a will be 4 bytes in memory
    printf("Size of int is %zu bytes\n", sizeof(a)); 
    // now see you can also use %d (used for signed int) or %u (used for unsigned int) to print size of data types
    // %zu (used for printing size_t values), 
            // The z modifier tells printf that the argument is of type size_t.
            // u means unsigned decimal integer.
            // So %zu is the correct way to print values returned by sizeof or of type size_t.


}