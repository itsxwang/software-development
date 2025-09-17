#include <stdio.h>

int main()
{
    int n = 1;
    int rows;
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for (int i = 1; i <= rows; i++)
    {
        for (int k = 1; k <= i; k++)
        {
            printf("%d ", n);
            n++;
        }
        printf("\n");
    }
    return 0;
}