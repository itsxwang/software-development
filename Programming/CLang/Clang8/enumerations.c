#include <stdio.h>

// enumerations in C: https://youtu.be/9QdJExC2AVg?si=mdbk8I1FGw6aT6hU&t=7

// why enums over macros: https://youtu.be/9QdJExC2AVg?si=ajP3DhI6-8EXxF_a&t=157

struct point
{
    int x, y;
};

struct rectangle
{
    struct point topLeft, bottomRight;
};

int getArea(struct rectangle r)
{
    return (r.bottomRight.x - r.topLeft.x) * (r.topLeft.y - r.bottomRight.y);
}

int main()
{
    enum color
    {
        RED,
        GREEN,
        BLUE
    };

    int myColor = GREEN;

    switch (myColor)
    {
    case RED:
        printf("Color is Red\n");
        break;
    case GREEN:
        printf("Color is Green\n");
        break;
    case BLUE:
        printf("Color is Blue\n");
        break;
    default:
        printf("Unknown Color\n");
    }

    enum day
    {
        true = 1
    };
    int var = true;
    printf("Value of true: %d\n", var);

    struct rectangle r = {.topLeft = {1, 2}, .bottomRight = {3, 1}};
    printf("%d\n", getArea(r));
    return 0;
}