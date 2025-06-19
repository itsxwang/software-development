// character data type -> https://youtu.be/QncEuobXjvw?si=vC0-KCBNdEQOfXXL

// to encode characters there are several encoding schemes, but most common is ASCII encoding scheme

#include <stdio.h>

int main()
{
    char ch = 'A';
    printf("%d\n", ch); // if you use d as specifier for string characater, it print ascii of that character
    printf("%c\n", ch); // if you use c as specifier for string characater, it print actual character

    char ch2 = 65;
    printf("%c\n", ch2); // if you use c as specifier for integer, it print character associated with the decimal value in ascii table
    printf("%d\n", ch2); // if you use d as specifier for integer, it print actual integer value

    // in traditional ascii table, each char requires 7 bits
    // in extended ascii table, each char utilize 8 bits
    
    // characters can also be negative -128 to 127, but each negative character associated with some positive character in extended ascii table
    // example 128 (exceeds) =   -128 in negative (if you check they both will represent character)
    // 129 (exceeds, 2) = -127 in negative 
    return 0;
}