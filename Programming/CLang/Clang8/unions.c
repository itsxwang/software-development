#include <stdio.h>

// Unions in C: https://youtu.be/oySsPUDr35U?si=Vh8exnIQibVRxfua&t=7
// size of union is equal to size of its largest member
// a way to create array containing different types of data 

union  data
{
    int i;
    int k;
};


int main()
{
    union data d;
    d.i = 10;

    printf("%d\n", d.k); 
    return 0;
}