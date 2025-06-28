// https://youtu.be/qHZ7qf6-rhc?si=Kk2nyEet3RZ4a63m


// Memory hierarchy -> Top to bottom (on top faster access but smaller size, on bottom slower access but bigger size)
// https://youtu.be/qHZ7qf6-rhc?si=sLcmmpWInYPQK3ib&t=7


#include <stdio.h>

int main()
{
    // syntax of register modifier
    // register type varname; // this hints the compiler to store a variable in register meomry, this is done to access time reduces greatly for most frequently referred variables

    // this is the choice of compiler whether it put var1 in register or not
    // and compiler do the necessary optimizations themselves, means it put those variables(that are frequently used) in register memory automatically
    register int var1 = 10;
    printf("var1: %d\n", var1);

    return 0;
}