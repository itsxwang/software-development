#include <stdio.h>

//  scanf(scan formatted string) -> https://youtu.be/ZSZwDARaQYI?si=egcGfvoEVnCSowQ0&t=7

int main()
{
    int v;
    // why ampersand (address of operator) -> https://youtu.be/ZSZwDARaQYI?si=UADRnfVrJSBFHvPM&t=77
    scanf("%d", &v);

    printf("Value of v: %d\n", v);
    printf("address of v: %p\n", &v); //%p -> to represent pointer values , cast it to (void*) to ensure pointer is passed corrrectly to printf
    return 0;
}
