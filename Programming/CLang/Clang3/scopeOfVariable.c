// https://youtu.be/elMQ5YtZPxA?si=gT8WUY8ZB2Ha_msN&t=17

#include <stdio.h>
int var = 0;

int f2()
{
    printf("funtion var: %d\n", var);
}

#define f() printf("macro var: %d\n", var);

int main()
{
    // Scope = Lifetime of variable
    // you can't redefine variable in same block, but you can use different block to redefine

    int var = 7;
    f();  // 7, means macro will use the local variable value
    f2(); // 0, means function will use the global variable value
    return 0;

    /*
    🧠 What’s really happening? 
    1. Macro expansion is done at compile-time by the preprocessor. 
         So this:
         f();
        becomes:
        ```
        printf("var: %d\n", var);
        ```
        Since this line is inside main(), and inside main() there’s a local int var = 7;, the macro uses that one.

        But function resolution happens at runtime, and functions do not see local variables of other functions.



     */
}
