#include <stdio.h>

void rev(char *s) {
    char *ptr = s;   // store starting address
    while (*ptr != '\0') {
        ptr++;       // move pointer to next character
    }
    
    for (int i = (ptr - s); i >= 0; i--) {
        printf("%c", *(s + i));

    } 

}

int main() {
    rev("hello");
    return 0;
}
