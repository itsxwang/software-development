// fgets function in C, is used to read a line of text from the standard input stream (stdin) into a buffer.
// Syntax -> `fgets(char *buffer, int size, FILE *stream);`

    // buffer → Where to store the string
    // size → Maximum number of characters to read (including '\0') (\0 is the null character)
    // stream → From where to read (e.g., stdin for keyboard input)



#include <stdio.h>
#include <string.h>

int main()
{   
    char name[20];
    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin);    

    // Reads up to 19 characters into name (leaves space for the null character \0)
    // Reads from the keyboard (stdin) standard input stream
    // Stores the newline character (\n) if you press Enter before 19 chars(or if the characters are less than size-1 at the end)
    // Automatically null-terminates the string
    
    printf("You entered: %s", name);
    printf("This line print in new line");
    // 🧹 Optional: Remove trailing \n
    // If you want to strip the newline from fgets, do this:

    // It scans str1 and returns the index of the first character that matches any character in str2(in this case, "\n").
    // And then we simply do indexing to remove the newline character and replace it with null character.
    // ✅ Function Prototype:
            // size_t strcspn(const char *str1, const char *str2); 
    // it returns size of string(strlen(string)) if there is no match from str2(in this case "\n")

    name[strcspn(name, "\n")] = '\0'; 
    printf("%s", name);
    printf("This line print in same line");
    
    return 0;
}