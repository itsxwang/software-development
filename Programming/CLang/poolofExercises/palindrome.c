#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number: ");

    
    scanf("%d", &num);

    int quotient = num;
    int result = 0;
    while (quotient) {
        int remainder = quotient % 10;
        result = result * 10 + remainder;
        quotient = quotient / 10;
    }

    if (result == num) {
        printf("%d is a palindrome", num);
    }
    else {
        printf("%d is not a palindrome", num);
    }
    
    return 0;


}