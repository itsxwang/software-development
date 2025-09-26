#include <stdio.h>

// Structures in C: https://youtu.be/zmRxC7gYw-g?si=3ypf36wJh0B4Fy_W&t=7
// struct is user defined data type which can be used to store different data type elements together into single type

int main()
{       
    struct structures
    {
        int speed,
            acceleration,
            angle;
        char *name;
    } car, bus; ;
    // . operator to access members of structures
    car.speed = 100;
    bus.speed = 80;

  

    // Structure Types (Using Structure Tags): https://youtu.be/IPLPISOXvF0?si=yc-gmnU7FGrsnA3l&t=7

    
    // Structure Types (Using typedef): https://youtu.be/Bw3sUC6Txus?si=tN8LODltebGy6gBc&t=7
    typedef struct vehicle
    {
        int speed,
            acceleration,
            angle;
        char *name;
    } v; // v is alias name of struct vehicle
    v cycle;
    v bike = {0, 0, 0, "Honda"};
    cycle.speed = 30;

    // Initializing & Accessing the Structure Members: https://youtu.be/2DidKZmwNMo?si=kPitruYUpqswN9r0&t=7


    // Designated Initialization in Structures: https://youtu.be/WUbp4gHR6_8?si=Y72Hm9IneVjLK_7M&t=7
    v truck = {.speed = 60, .angle = 0, .name = "Volvo", .acceleration = 10};

    // Declaring an Array of Structure: https://youtu.be/EGeIsvx4Wns?si=VKqaWcuJvlLcte8z&t=7
    
    // Pointer to Structure Variable: https://youtu.be/VsnXsfNstVw?si=g9gUKwt3PAiY2B6w&t=7 
    v *ptr = &bike;
    printf("Bike name: %s\n", ptr->name); // -> operator is used to access members of structure using pointer, its same as (*ptr).name

    // Structure Padding in C(how memory allocated to structured): https://youtu.be/aROgtACPjjg?si=k9qtC7vjgM51aVs2&t=7
    // Structure Packing in C: https://youtu.be/VZBLCpQYchs?si=AAVP5Iev1grdWuDE&t=7 , `#pragma pack(1)` (special purpose directive used to turn some features on or off) to remove `structure padding`


    return 0;
}