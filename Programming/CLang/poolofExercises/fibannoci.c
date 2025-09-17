#include <stdio.h>

// with recursion
// int fib(int n)
// {
//     if (n == 0)
//         return 0;
//     if (n == 1)
//         return 1;
//     return fib(n - 1) + fib(n - 2);
// }

// int main()
// {

//     int n;
//     printf("Enter the number: ");
//     scanf("%d", &n);
//     printf("Fibonacci of %dth term is %d\n", n, fib(n));
//     return 0;
// }


// with for loop
int main()
{
    int n; 
    printf("Enter the number: ");
    scanf("%d", &n);
    
    int a = 0, b = 1,c=1;
    for (int i = 2; i<=n; i++) {
        c= a;
        a = b;
        b= a+c;
    }

    n > 0 && printf("Fibonacci of %dth term is %d\n", n, b );
    return 0;
}