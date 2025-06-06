//  https://youtu.be/aZb0iu4uGwA?si=Q9EdyTAvDCmsASWC&t=6947

#include <stdio.h>

int main()
{

    // Implicit type casting
    // basic rule ,
    // int and int-> int
    // int and float -> float
    // float and float -> float

    // int and int
    printf("%d\n", 55 / 7); // will give int(and that not amking any sense, as the answer should come in decimal), becuase int and int produce int

    // float and int
    printf("%f\n", 55 / 7.0); // will give float

    // float and float
    printf("%f\n", 55.0 / 7.0); // will give float, same result as second

    // In programming, type compatibility is crucial. For int a = 3.5;, the float 3.5 is demoted to 3, losing the fractional part because a is an integer. Conversely, for float a = 8;, the integer 8 is promoted to 8.0, matching the float type of a and retaining precision.

    // Explicit type casting
    float fl = 7.77752;
    // so here we type cast float to int
    int in = (int)fl;

    printf("Value: %d\n", in);

    // int to float typecasting
    printf("Value: %f\n", (float) (3*2/3-3+1));
    
    return 0;
}
