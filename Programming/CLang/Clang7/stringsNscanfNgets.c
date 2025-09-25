#include <stdio.h>
#include <string.h>

// string literal basics : https://youtu.be/IlqiTmcK1Eg?si=0Rg8wIaG6abl75b2&t=7

int main()
{   
    // stroing the string literals and how they are stored in memory: https://youtu.be/zNCgj3mfixw?si=_qEkpKcgCIwrIzWR&t=17
    char *ptr = "Hello hi";
    // Performing Operations on String Literals and writing string literal is equal to writing pointer to 1st character of string literal:  https://youtu.be/hiO_j137K48?si=bHBYVdBiAXIHhZgc&t=7
    // string literal cannnot be modified it gives undefined behaviour(because they store in ROM): https://youtu.be/hiO_j137K48?si=f47oarqN2kecnBJW&t=157

    // String Literal vs. Character Constant: https://youtu.be/GJ9w9eYPq5E?si=gIpEN4a0nlmQQXI9&t=7
    // Declaring and Initializing String Variables: https://youtu.be/cnfRyvo41Bs?si=z3BAEgLqFlamDXrR&t=7
        // when a string is assigned to character array, then this character array is treated like other types of arrays. We can modify its chars.
            // char s[6] = "Hello";
            // or like this: char s[6] = {'H', 'e', 'l', 'l', 'o', '\0'};

    // Writing Strings using printf and puts Functions: https://youtu.be/wW7u_WrkY6Q?si=sIb9W0jaY0tR61wE&t=17
    
    // Reading Strings using scanf and gets Functions: https://youtu.be/2HasEQe5VR0?si=7hBJOIAyh0EQDXL8&t=7
    // scanf("%ns",svar); // n means n chars store in s array

    // make custom input function using getchar: https://youtu.be/jGRI7Au7f2c?si=EokN0zBsGAJR8OwZ&t=17

    
    printf("%s\n", ptr);
    
    char arr[5];
    
    scanf("%s",arr);
    
    // c string lib and strcpy, and some consecutive vids for more string funcs: https://youtu.be/DOPs6c0f4Ek?si=hr970P3ZjrdpK1FR&t=7
    int len = strlen(arr); // note: len is diff than size, len only return the amount of chars it hold(length of the string), sizeof is the capability it can hold(length of the array)
    printf("Length of string: %d\n", len);

    // strcat() & strncat(): https://youtu.be/beq14396XMk?si=OJUyv8HyJWkW-nna&t=7

    // strcmp(): https://youtu.be/1h0dsVlowwM?si=x6S9JFOz2pfiwQyh&t=7

    // array of string: https://youtu.be/AefKSoNpZtQ?si=pzmzGq7PioKRsfOl&t=27
    char *s = "Hello";
    // printf("%c\n", 2[s]); == printf("%c\n", s[2]); and both means *(s+2) which return character at location `s+2`
    return 0;
}