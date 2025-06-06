/*
🔄 The Core Idea
We first read the entire line as a string using fgets(), then parse (extract) specific data from that string using sscanf().

Why this is awesome:

fgets() ensures safe, clean input.

sscanf() lets you pick out exactly what you need from that input.
*/

#include <stdio.h>

int main()
{
    // ✅ Step-by-Step Breakdown

    /*     🧩 1. fgets(input, sizeof(input), stdin);
                  - Reads the entire user input, including spaces, into a string (input[]).

                  - sizeof(input) ensures it won’t overflow.

                  - Stops when it hits \n (Enter key).

                  - Stores everything — even the newline — and adds \0 at the end.

                  - ✅ Safe input capture, no matter what user types. */

    char input[100];
    fgets(input, sizeof(input), stdin);

    // 🧩 2. sscanf(input, "%d", &age);

    /*      - Parses the string input as if it was scanf() input.

            - %d tells it to look for an integer at the start of the string.

            - &age is where to store the result.

            - ✅ Extracts specific types of data (int, float, char, etc.) from your input string.
     */

    int age;
    sscanf(input, "%d", &age); // pulls number from the input string
    printf("Your age is: %d\n", age);
    // 🧠 What happens if user types:
    /*
    - fgets() captures "18\n" (\n or any other arbitrary string, but it should be after any integer)
    - sscanf() extracts 18 from that string and stores it in age
 */

    return 0;
}


// 🧠 Generalized Concept:
// You can use this combo for any kind of input:

/* 
| Input Type      | Code                              |
| --------------- | --------------------------------- |
| int             | `sscanf(input, "%d", &x);`        |
| float           | `sscanf(input, "%f", &y);`        |
| string          | `sscanf(input, "%s", str);`  // until it encounters first whitespace     |
| char            | `sscanf(input, "%c", &ch);`       |
| multiple values | `sscanf(input, "%d %f", &a, &b);` |
 */

// Just change the format string ("%d", "%f", "%s", etc.) to match what you want to extract.

