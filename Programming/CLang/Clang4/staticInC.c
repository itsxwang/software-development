// <!-- https://youtu.be/CRhF8a9-pzc?si=ChBrAWBWIVjSH9lm&t=7 (Variable Modifiers - static) -->

#include <stdio.h>  
static int var; // now var becomes local to this file, and can't be access from anothert file using extern keyword

int add() {
    // this variable is local but not destroyed at the end of function, because it is static
    // - https://youtu.be/CRhF8a9-pzc?si=CWNeO4byDm0SlEdO&t=917

    int var5=0;
    static int var2; 
    // static int var2=var5; error because static variable can't be initialized to non-constant value or any function return value
    // static int var2=5; valid

}

int main()
{   
    printf("var: %d\n", var);
}


// static vatiable remains in memory even it is declared within a block, but automatic variable is destroyed after block execution