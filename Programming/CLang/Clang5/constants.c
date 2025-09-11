#include <stdio.h>
#include <math.h>

// https://youtu.be/BVnNg20AuYU?si=uCKZP37FxoIDGeo9&t=17
#define SIZE 10 // constant (macro)
// we can use macros like functions too
#define SQUARE(x,n) ((int)(pow(x,n))) // macro like a function

// first expansin and then evaluation -> https://youtu.be/BVnNg20AuYU?si=YW5wXM938buTtWgT&t=397


int main() {
    // using const keyword -> https://youtu.be/I1i0WgiRVXo?si=keZVJSJwqEB8dmNU&t=57
    const float pi = 3.14; // constant (variable)
    int arr[SIZE]; // using constant macro to define array size
    printf("Size of array: %lu\n", sizeof(arr)/sizeof(arr[0])); 
    printf("Value of pi: %.2f\n", pi);
    printf("Square of 5: %d\n", SQUARE(5,2)); // using macro like a function

    // hexadecimal in c
    printf("Hexadecimal of 255: %x\n", 255);
    return 0;
}
