#include <stdio.h>

int main()
{

    int ar1R, ar1C;
    printf("Enter the number of rows and columns of first matrix: ");
    scanf("%d %d", &ar1R, &ar1C);
    int ar1[ar1R][ar1C];
    printf("Enter the elements of first matrix\n");
    for (int i = 0; i < ar1R; i++)
    {
        for (int k = 0; k < ar1C; k++)
        {
            scanf("%d", &ar1[i][k]);
        }
    }

    int ar2R, ar2C;
    printf("Enter the number of rows and columns of second matrix: ");
    scanf("%d %d", &ar2R, &ar2C);
    int ar2[ar2R][ar2C];
    printf("Enter the elements of second matrix\n");
    for (int i = 0; i < ar2R; i++)
    {
        for (int k = 0; k < ar2C; k++)
        {
            scanf("%d", &ar2[i][k]);
        }
    }

    if (ar1C != ar2R)
    {
        printf("Matrix multiplication is not possible");
        return 0;
    }

    int resM[ar1R][ar2C];

    for (int i = 0; i < ar1R; i++)
    {
        for (int k = 0; k < ar2C; k++)
        {
            resM[i][k] = 0;
            for (int j = 0; j < ar1C; j++)
            {
                resM[i][k] += ar1[i][j] * ar2[j][k];
            }
        }
    }

    // print result matrix
    printf("\nResult matrix is:\n");
    for (int i = 0; i < ar1R; i++)
    {
        for (int k = 0; k < ar2C; k++)
        {
            printf("%d ", resM[i][k]);
        }
        printf("\n");
    }

    return 0;
}