#include <stdio.h>

int main()
{
    int num = 0, counter = 0;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (num <= 1)
        printf("%d is neither prime nor composite", num);
    else
    {
        for (int i = 1; i <= num; i++)
        {   
            if (num % i == 0) {
                counter++;
            }
        }
    }

    if (counter>2) {
        printf("%d is composite", num);
    }
    else {
        printf("%d is prime", num);
    }

    return 0;
}