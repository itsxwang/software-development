// https://youtu.be/aZb0iu4uGwA?si=pgwLJnsvKfM5Yds8&t=3717

#include <stdio.h>

int main() {
    int a; 
    printf("Enter a number: ");
    // "& is the “address of” operator and it means that the supplied value should be copied to the address which is indicated by variable a.
    scanf("%d",&a); // scanf("%d",&a) is used to take input from user 

    printf("You entered %d",a);
}