#include <stdio.h>

int main()
{
    printf("Enter the number of rows: ");
    int n_rows;
    scanf("%d", &n_rows);
    int left_sp = n_rows;
    int stars = 1;

    for (; n_rows; n_rows--)
    {
        for (int i = left_sp; i ; i--)
            printf(" ");
        left_sp--;
        for (int k = stars; k; k--)
            printf("*");
        stars += 2;
        printf("\n");
    }
}