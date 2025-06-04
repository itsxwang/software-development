// https://youtu.be/aZb0iu4uGwA?si=f67a3fvKIZfFSHC4&t=6017

#include <stdio.h>

int main()
{
    // basic rule ,
                    // int and int-> int
                    // int and float -> float
                    // float and float -> float


    // int and int
    printf("%d\n", 55/7); // will give int(and that not amking any sense, as the answer should come in decimal), becuase int and int produce int 

    // float and int
    printf("%f\n", 55/7.0); // will give float

    // float and float
    printf("%f\n", 55.0/7.0); // will give float, same result as second

    // In programming, type compatibility is crucial. For int a = 3.5;, the float 3.5 is demoted to 3, losing the fractional part because a is an integer. Conversely, for float a = 8;, the integer 8 is promoted to 8.0, matching the float type of a and retaining precision.


    return 0;
}

