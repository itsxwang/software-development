#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1 = 0, num2 = 0;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    int sum = num1;
    for (int i = abs(num2); i; i--)
    {
        if (num2 < 0)
        {
            sum--;
        }
        else
        {
            sum++;
        }
    }
    printf("The sum of %d and %d is %d", num1, num2, sum);
    return 0;
}

// now with half adder logic -> https://youtu.be/QFq5vbSlXHU?si=UlH2rB3dm5X8eSFU&t=147

