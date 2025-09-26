#include <stdio.h>
#include <stdlib.h> // for malloc, calloc, realloc, free

// Dynamic Memory Allocation(in this memory is allocated in Heap) Malloc Calloc Realloc & Free(): https://youtu.be/q8j8EqCZcWM?si=1avgreni0uIvQ4PH&t=7

int main()
{
    // to allocate memory during runtime in heap use dynamic memory allocation functions
    // --------------------------------------------------------------
    
    // malloc: stands for memory allocation, it returns the void pointer to the allocated memory : https://youtu.be/q8j8EqCZcWM?si=t-KSn1nSI6W5Ndrj&t=177
    // calloc :  contiguous allocation: https://youtu.be/q8j8EqCZcWM?si=k2PPGn5V7BxothQe&t=447
    
    // realloc stands for reallocation : https://youtu.be/q8j8EqCZcWM?si=xhqga3Dbc1E2WGT9&t=617
    
    // free : https://youtu.be/q8j8EqCZcWM?si=097L2syhbkrlnxzt&t=757

    // --------------------------------------------------------------

    // In code: https://youtu.be/q8j8EqCZcWM?si=OSx3KvVAV5aEicKf&t=927
    int i;
    printf("Enter the size of array: ");
    scanf("%d", &i);
    int *arr = (int *)malloc(i * sizeof(int)); 
    for (int j = 0; j < i; j++)
    {
        printf("Enter element %d: ", j + 1);
        scanf("%d", arr+j);
    }
    printf("Elements in array are: ");
    for (int j = 0; j < i; j++) 
    {
        printf("%d ", *(arr+j));
    }
    printf("\n");
    free(arr); // free the allocated memory
    arr = NULL; // avoid dangling pointer
    return 0;
}