#include <stdio.h>
#include <ctype.h>
#include <string.h>


int main()
{
    // simple calculator with if else, in C
    float a, b; // declaring variables
    char op[3];

    printf("First No: ");
    scanf("%f", &a);
        

    printf("Second No: ");
    scanf("%f", &b);

    printf("Operation (`add` or `mul`) : ");
    scanf("%s", op);

    // lowercasing choice of operation
    for (int i = 0; op[i]; i++)
    {
        // `if` is optional as `islower` does nothing to already lowercased chars
        if (op[i] >= 'A' && op[i] <= 'Z')
        {
            op[i] = tolower(op[i]);
        }
    }

    if (strcmp(op, "sum") == 0 || strcmp(op, "add") == 0)
    {
        printf("Result of %f and %f is: %.2f\n", a, b, a + b);
    }
    else if (strcmp(op, "mul") == 0)
    {
        printf("Result of %f and %f is: %.2f\n", a, b, a * b);
    }
    else
    {
        printf("Operation `%s` not supported!!\n", op);
    }
    //
    return 0;
}