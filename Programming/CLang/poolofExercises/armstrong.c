#include <stdio.h>

int main()
{
    int num, originalNum = 0, remainder = 0, result = 0, counter = 0;
    printf("Enter an integer: ");
    scanf("%d", &num);
    printf("%d\n", originalNum);
    int q = num;
    while (q)
    {
        counter++;
        q /= 10;
    }

    q = num;
    while (q)
    {
        remainder = q % 10;
        result += remainder * remainder * remainder;
        q /= 10;
    }
    if (result == num)
    {
        printf("%d is an Armstrong number", num);
    }
    else
    {
        printf("%d is not an Arm    strong number", num);
    }

    return 0;
}