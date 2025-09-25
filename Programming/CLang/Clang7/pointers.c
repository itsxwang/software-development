#include <stdio.h>

// https://youtu.be/JW3Vg0xpJLY?si=jYUMTwXx3CTXfX5r&t=7: pointers
// pointer a special variable
// capabale of string initial(or we can say) base address of object that it wants to points to 
// points to memory location where 1st byte is stored

// Declaring & Initializing Pointers in C: https://youtu.be/b3G9RjG4l2s?si=hoUhpPkzOK8r7HOu&t=7

// Value of(dereference) Operator in Pointers: https://youtu.be/xlt_bEqfnxg?si=EZDqVLZbvFiux57A&t=7
    // never apply this operator to uninitialized pointers(segmentation fault explained): https://youtu.be/xlt_bEqfnxg?si=Zt6uHhh_sf1Up_KI&t=177

// Pointer Assignment: https://youtu.be/qG01z8unrU4?si=rDVY15qfEvfeBEmR&t=7

// Pointer Application: https://youtu.be/qxUd5av1OYI?si=4Cj65TMqPFMGQ-33&t=7


// returning pointers: https://youtu.be/NVH4K-0O39E?si=egGQL0bO8ywcBxE4&t=7
    // never try to return the location of automatic variable: https://youtu.be/NVH4K-0O39E?si=leKqd7XIzp6rs_pE&t=227
    
// -----------------------------------------------------

// Pointer Arithmetic: https://youtu.be/FmptkK2XZ0w?si=xUhB_MaRNQ4Ct5YW&t=7
        // subtracting one pointer from another pointer: https://youtu.be/MgsPbqOKF-c?si=EuozVMBdd3Im42MB&t=237
            // General rule:  When you subtract two pointers of the same type: -> ptr_diff = (address_difference_in_bytes) / sizeof(type);
                        //  C/C++ does not directly return the byte difference.
                            // Instead, it answers:
                            // 👉 "How many elements of this type (array type) fit between these two pointers?"
// undefined behaviours of pointer arithmetic: https://youtu.be/MgsPbqOKF-c?si=m4CkdjFMuGib_qny&t=367
// Pointer Arithmetic (Comparing the Pointers,  but only possible when both pointers points to same array): https://youtu.be/nYHA3eZuhzc?si=GCdoXjZD-FYr40ms&t=7

// Using Array Name as a Pointer: https://youtu.be/gv-y9hIhvq4?si=MIJZU_139-OZxAgy&t=7
    // name of the array store the address of the first element of array, so it can be used as a pointer to 1st element of array

int main()
{
    int *ptr;       
    
    int arr[2][2] = {{7,2},{3,4}};    
    int (*p)[2] = arr;
    ptr = &arr[0][0];
    printf("address of 1st element of array: %p\n", ptr);
    printf("value of 1st element of array: %p\n", arr);
    printf("value of 1st element of array: %d\n", (int *)arr==ptr);
    printf("value of 1st element of array: %d\n", *((*p)+1)); // 1: ✅ So: 
// Even though arr and ptr may point to the same address numerically, their types tell the compiler how many levels of indirection to apply. That’s why *arr ≠ *ptr.
    // printf("value of 1st element of array: %d\n", *arr);
    // *((*ptr)+1) = (*ptr)[1]

    int arr3d[2][2][2] = {{{1,2},{3,4}}, {{5,6},{7,8}}};
    printf("%d ",*(*((*(arr3d+1))+1)));
    return 0;
        
}

// using pointers to print 2D arrays and row and column major order: https://youtu.be/lCDGo7rK3ms?si=eFyHECQzrhY_lMBH&t=57

// Address Arithmetic of Multidimensional Arrays: https://youtu.be/3fOPOUnkcdQ?si=A98i74z0077JAbRf&t=127    

// formula of finding address of an element in 2D array: https://youtu.be/ZiA6HB7JbxE?si=Ilg1Aj4VIH8N1mTr&t=7 

// Pointer Pointing to an Entire Array: int (*ptr)[2] = arr; // means ptr points to an array of 2 integers