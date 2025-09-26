#include <stdio.h>


// function pointers in c:  https://youtu.be/BRsv3ZXoHto?si=8qu3b9XxfZ9E2dLZ&t=17
// functions are set of instructions(these instructions stored in memory), and like vars they also store but in the form of instruction pointers

int add(int a, int b) {
    return a + b;
}

int main()
{
    // function pointer declaration
    int (*func_ptr)(int, int);
    // define,  func_ptr = &add; // & is optional
    func_ptr = add; // & is optional

    // application of function pointers(like calculator using function pointers): https://youtu.be/wQ-gWwKKeP4?si=TnAhnhC62YurhX7u&t=7

    return 0;
}