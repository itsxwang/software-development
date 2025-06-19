// (float,double,and long double) https://youtu.be/vNeOx1rQ25E?si=ZuXZ0Lip1atPVCwe

// they use representation to represent data-> 
// - float: IEEE 754 single-precision floating-point format
//  - Double: IEEE 754 double-precision floating-point format
//  - Long double: extended-precision floating-point format

// We have two two different representations for fractional numbers : fixed point and floating point
        // -> Floating used in modern computers, this is how we represent real number in our day to day life
        // FLoating point use some formula to represent real number  

#include <stdio.h>

int main()
{
    printf("Size of float: %lu\n",sizeof(long double));
    printf("Value of pi: %.2f\n",3.14159f);
    printf("i am long double: %.2Lf\n",3.14159L);

    // float able to represent precise value till 7 decimal places, starting from first place itself
    // double upto 16
    // long double upto 19
            
    return 0;
}