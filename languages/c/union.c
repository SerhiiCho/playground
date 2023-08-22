#include <stdlib.h>
#include <stdio.h>

union myUnion {
    int myInt; // 4 bytes
    char myChar; // 1 byte
};

int main()
{
    union myUnion uni;
    uni.myInt = 4;
    uni.myChar = 9;

    return 0;
}