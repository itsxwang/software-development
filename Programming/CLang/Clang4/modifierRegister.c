// https://youtu.be/qHZ7qf6-rhc?si=Kk2nyEet3RZ4a63m
#include <stdio.h>

int main()
{
    // syntax of register modifier
    // register type varname; // this hints the compiler to store a variable in register meomry

    register int var1 = 10;
    printf("var1: %d\n", var1);

    return 0;
}