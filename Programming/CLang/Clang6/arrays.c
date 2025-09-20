#include <stdio.h>

// arrays in C: https://youtu.be/55l-aZ7_F24?si=Cjh7fM_ktanO8eXz&t=17
// 1D -> https://youtu.be/55l-aZ7_F24?si=WM17LcVJXRqN2rIJ&t=267

// decalre array -> https://youtu.be/Bqud0_ozgcc?si=Rn5hOVv5qsunDYjh&t=7

#define SIZE 5

int main()
{
    // &array[index]: means address of `array[index]` value
    int arr[SIZE] = {1, 2, 5, 2, 5};

    // Designated Initialization of Arrays : https://youtu.be/Sr21AdNJPKg?si=LhjHic6ExdH6bC4l&t=7
    int arr2[7] = {[0] = 1, [2] = 2, [4] = 3};
    int arr7[7] = {7, 1, [0] = 1, [2] = 2, [4] = 3}; // designated initialization takes priority over normal initialization

    // sizeof operator with array
    // to know how many elements in array `sizeof(array) / sizeof(array[0])`

    // ------------------------------
    // Multidimensional -> https://youtu.be/iBFzKvCzXsw?si=0nXwzhmYOdJsc3Fu&t=7
    // array of arrays
    // 2d -> https://youtu.be/J1aQ9JN4vZY?si=EMgD1kOuSRtW61xH&t=7
    // initialization of 2d arrays -> https://youtu.be/J1aQ9JN4vZY?si=8AKf8_oeewmmMC9g&t=247
    // initializing 3d arrays -> https://youtu.be/bbkdiUbou74?si=TMzSepkaIj5PQG-m&t=67
    
    int arr3[2][3] = {{7, 2, 3}, {4, 5, 6}};
    printf("Value of arr3[0][0]: %d\n", arr3[0][0]);
    for (int i = 0; i < 2; i++)
    {
        for (int k = 0; k < 3; k++)
        {
            printf("%d | ", arr3[i][k]);
        }
        printf("\n");
    }

    // https://youtu.be/aAFP5wsmH2k?si=8WhdR3QGNeYAbGAC&t=7 : Matrix multiplication
        // no.of columns of 1st matrix = no.of rows of 2nd matrix
        //  resultant matrix = rows(of 1st matrix) X columns(of 2nd matrix)
    
    // constant arrays: https://youtu.be/yK9AFU7fzEA?si=rAVU6AneeFEAZIW1&t=7
        

    // Variable Length Arrays in C : https://youtu.be/JW3Vg0xpJLY?si=jYUMTwXx3CTXfX5r&t=7

    return 0;
}