#include <stdio.h>

// call by value and call by reference -> 
// pointers(variables that can store addresses of other variables) -> https://youtu.be/HEiPxjVR8CU?si=dXmikJGkd3WgX9Nc&t=277

// reference(&) and dereference(*) operators ->https://youtu.be/HEiPxjVR8CU?si=PKfj763ed-_Q1kYh&t=347 
    // => `*pointer1` => means we are accessing value at address that hold by pointer1

// argument and parameter -> https://youtu.be/gF7wjwM9Jjs?si=Uj7KgblBIlGSAuHD&t=277
int main()
{
    // funtion prototype
    // int f1();
    // f1();
    int f2(int *, int *);
    // definition
    int a= 7, b=8;
    f2(&a, &b);
    int weird(int);
    for (int i = 1; i<=10; i++) {
        weird(i);   
    }


    return 0;
}

// parmaeters name must in definition 
int f2(int *a, int *b)
{
    return *a + *b;
}
// this with indirect recursion
int weird(int a) 
{
    if (a%2==0) {
        printf("%d ",a-1);
    }
    else {
        printf("%d ",a+1);
    }
}

// either declare function or write definition before calling it

// function definition -> https://youtu.be/gF7wjwM9Jjs?si=4Wv_NwUhQF-0biuE&t=7
    
// static functions in C -> https://youtu.be/mwmvfNVhIA4?si=oU7Ea-7LMz_JKd-f&t=7

// first compiler cross check definition with decalaration 

// https://youtu.be/_-wrCUN4z24?si=7kyfE8_Ch3-FXhRG=7 - advantage and disadvantage of recursion






