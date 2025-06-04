#include <stdio.h>
#include <math.h>

// circle area
// ------------------------------------
/* int main(void)
{
    const float PI = 3.14159;
    float radius;
    printf("Enter radius: ");
    scanf("%f", &radius);
    printf("The Area of radius %f is %.2f", radius, PI * pow(radius, 2));
    // %.2f means:
    // f → float/double
    // .2 → 2 digits after the decimal point

    return 0;
} */

// celsius to farhenheit
// ------------------------------------
/* int main()
{
    float c;
    printf("Celsius: ");
    scanf("%f", &c);
    printf("Farhenheit: %.2f", (c * 9 / 5) + 32);
    return 0;
} */

// simple intrest calculator
// ------------------------------------
int main() {
    float p,r,t,si;
    printf("Enter principal amount: ");
    scanf("%f", &p);
    printf("Enter rate: ");
    scanf("%f", &r);
    printf("Enter time: ");
    scanf("%f", &t);
    si = (p * r * t) / 100;
    printf("Simple Intrest: %.2f%%", si);
    return 0;
}