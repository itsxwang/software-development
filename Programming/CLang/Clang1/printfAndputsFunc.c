// https://youtu.be/wW7u_WrkY6Q?si=qsVGQRvf7VmOiNxC&t=115

#include <stdio.h>
#define Pi 3.14159

int main()
{
    // let's say we wanna print 5 chars of string
    char str[6] = "Hello";
    printf("%.2s\n", str);
    puts(str);  // sames as `printf("%s\n", str);`

    // %m.ns notation means n characters, but field length should be minimum 3 
    printf("%3.2s\n", str);

    // same for float 
    printf("`%5.2f`\n", Pi); // means 2 number after floats, and min float ,length is should be 5, (currenly actual float len is 4, so 5-4 = 1 space added before float PI)

    return 0;
}       