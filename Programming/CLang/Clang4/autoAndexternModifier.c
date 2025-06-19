// https://youtu.be/1Dkfmf4PmvQ?si=LPn2yw8eIgUs5DAy

// Automatic varible is a variable that automatically gets destroyed after a completion of function or scope in which it is defined
#include <stdio.h>
int main()
{
    int var; // equivalent to auto int var = 0; 
    printf("var: %d\n", var); // garbage value if you not initialize any automatic variable, but global varibale will auto initialize to 0  

    // extern modifier, help us to only decalare variable (means only tell compiler variable of which type), not define (allocate memory to it) 
    // by default `int var;`  will declare and define both, but `extern int var;` only declare not define

    // extern is short form of external 
    // used when paricular file needs to access a variable from another file
    // this is how -> https://youtu.be/1Dkfmf4PmvQ?si=ndiCLZm5wcVOxk5d&t=247 
    // extern says basically to compiler: go outside of my scope and find definition to this variable there

    // and using `extern int var;` we declaring the variable instead of defining, so we can write this statement multiple times in same scope
    // multiple declarations allowed but not multiple definitions

    // here is the summary -> https://youtu.be/1Dkfmf4PmvQ?si=UJfsfu8MsXE1ctUN&t=667 
    return 0;
}