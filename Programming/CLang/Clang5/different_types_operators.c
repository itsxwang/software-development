#include <stdio.h>

// https://youtu.be/50Pb27JoUrw?si=SF-VQW6q_AG5tPkC&t=7 - Types of operators in C/C++


// arithmetic operators-> https://youtu.be/5JXcX0IqRUo?si=FB8of8a6TXMVR7Z-&t=17

// Increment and decrement operators -> https://youtu.be/Lpo1QYsuAmM?si=2SR3yKlUcUbU4Ydx&t=17

// you cannaot use rvalue after or before ++ or -- operators, and rvalue and lvalue explained -> 
// https://youtu.be/Lpo1QYsuAmM?si=RF3jrVlRKWutSMUC&t=227

// spacing matters in operators -> https://youtu.be/3uRoSITqXRI?si=QKCiDgPsPGDB7V8X&t=727


// Bitwise operators -> https://youtu.be/jlQmeyce65Q?si=aaWOG4GDC27mHy7W&t=7
    // - https://youtu.be/8aFik6lPPaA?si=0xja8aE8TB-fMd7H&t=7 : left and right shift operators


int factorial (int n) {
    if (n==0) return 1;
    return n*factorial(n-1);
}


    
int main()
{
    int a = 7, b=3;
    printf("Mod operator in C %d\n", 13%12);    
    printf("%d\n",a++ + ++b);
    printf("%d\n",255<<1); // = 510
    printf("%u\n",255>>1); // 127
    //  general formula for left shift -> n*2^x, where n is the number and x is the number of shifts
    //  general formula for right shift -> n/2^x, where n is the number and x is the number of shifts

    printf("%d\n",factorial(8)-(factorial(6)*factorial(3))); // 120
    return 0;
}
