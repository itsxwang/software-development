#include <stdio.h>


// Static and Dynamic Scoping -> https://youtu.be/DeGfInd5BPY?si=Y-A5c-4RFvCOl6Ty&t=17
    // - Static and lexical scoping: https://youtu.be/DeGfInd5BPY?si=b_JTbMWd_EVWgKYW&t=77
    // - Dynamic scoping: https://youtu.be/-7Hz3iriV6w?si=jhbsYJZmr_cTrzHT&t=7

int k (int *a) {
    // printing address
    printf("%p\n", a);
}
int main()
{
    int a = 5;
    k(&a);
    return 0;
}
