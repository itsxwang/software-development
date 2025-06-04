// There is only one type of string in C: `a null-terminated array of characters`.

#include <stdio.h>
#include <string.h>

// 🧰 String Functions (from <string.h>)
/*

| Function            | Description                          |
| ------------------- | ------------------------------------ |
| `strlen(s)`         | Length of string (excluding `'\0'`)  |
| `strcpy(dest, src)` | Copy string                          |
| `strcat(dest, src)` | Concatenate strings                  |
| `strcmp(s1, s2)`    | Compare strings (returns 0 if equal) |
| `strchr(s, c)`      | Find first occurrence of char `c`    |
| `strstr(s1, s2)`    | Find substring `s2` in `s1`          |

 */

// 🧠 Important Notes
/*

- Strings in C are mutable (you can change them unless they are literals).
        - But note : 
        This is not valid code :
        char str_name[] = "Hello"; 
        str_name = "World"; error(expression must be a modifiable lvalue):   because arrays are not reassignbale — their addresses are fixed. 

        | Operation             | Valid? | Reason                                |
        | --------------------- | ------ | ------------------------------------- |
        | `str[0] = 'c';`       | ✅      | Modifies character in array           |
        | `str = "chg";`        | ❌      | Cannot reassign an array              |
        | `strcpy(str, "chg");` | ✅      | Copies new string into existing array |

        
- You must always leave enough space in memory for the null terminator ('\0').
- C doesn't have a native string type like Python/Java — everything is just a char[]

 */

int main()
{
    // In C, strings are arrays of characters that are null-terminated.
    // 🔑 Null-Terminated?
    // A string always ends with a special character: '\0' (null character)
    // This tells the program where the string ends in memory

    // 🧱 Declaring a String

    // ✅ Example 1: Character Array
    // here each character is stored in 8 bits, means 1byte for every char, so if you do `sizeof(str)` you will get 6 bytes
    char str[6] = {'H', ' ', 'l', 'l', 'o', '\0'};

    printf("%s\n", str);
    printf("%zu\n", sizeof(str)); // 6 bytes in memory
    // ✅ Example 2: String Literal

    // C automatically appends the '\0' at the end.
    // Internally, this is the same as:
    // - char str[] = {'H', 'e', 'l', 'l', 'o', '\0'};

    char str2[] = "Hello and hand";
    printf("%s\n", str2);

    // 📥 Reading a String
    printf("Enter your name: ");
    char name[20];
    // ⚠️ scanf("%s", str) reads up to the first whitespace
    // scanf("%s", name);  // input: "John Doe" → reads only "John"
    // printf("Name: %s\n", name);

    // so that's why we use fgets, so it reads the whole line
    // ✅ Function: fgets() = = file get string (It reads a line of text from a file or input stream (like the keyboard).
    // ⚠️ Why is fgets() safer than scanf("%s", ...)?
    /*

        | `scanf("%s", name)` | `fgets(name, size, stdin)`   |
        | ------------------- | ---------------------------- |
        | Stops at space      | Reads full line (with space) |
        | Can overflow buffer | Limits number of characters  |
        | No newline stored   | Newline (`\n`) is included at the end(if there are size-1 or less characters)   |
        | Less safe           | Safer                        |

     */

    fgets(name, sizeof(name), stdin);
    printf("\nName: %s\n", name);

    // `strcspn` explain in `fgetsAndstrcspn` file in detail
    name[strcspn(name, "\n")] = '\0'; // Remove the newline character from the name
    // Let's see how to concatenate string
    strcat(name, " concatenated string");
    printf("New Name: %s\n", name);
    

    // More about `fgets` in fgetsAndstrcspn file

    // 🧠 Bonus Tip -> If you want a pointer that can point to different strings:
    char *newstr = "sed";     // Points to string literal
    newstr = "chg";           // ✅ This is allowed (pointer reassignment)
    strcpy(name,"newwww");
    return 0;
}