// https://youtu.be/jr0hX1iMxrE?si=EMGghK5cfuMIXJv_&t=7
// scanf function is used to get user input into a variable (from standard input stream, usually terminal)

#include <stdio.h>

int main()
{
    double number;
    printf("Enter a number: ");

    printf("Enter a number: ");
    printf("You entered: %lf\n", number); // we can also use %f

    // reading multiple values
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d%d%d", &a, &b, &c); // when space comes after %d, it will take input for next variable
    printf("You entered: %d %d %d\n", a, b, c);

    char name[100];
    // reading strings with scanf(but fgets is better) -> https://youtu.be/jr0hX1iMxrE?si=CqPcIxFaVjrqk15j&t=367
    printf("Enter your name(100 characters): ");
    scanf("%s", name); // we not have to use & because name is already a address, its already pointing to the address where actual array is stored

    printf("You entered: `%.5s`\n", name); // %.5s means print only first 5 ch   aracters

    return 0;
}
