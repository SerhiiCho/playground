#include <stdio.h>
#include <stdlib.h>
#include "headers/printer.h"

int main()
{
    printf("My name is %s\n", MY_NAME);
    printHelloTimes(2);

    int longArray[3] = {4, 23, 51};

    printf("The sum is %d\n", count(longArray, 3));

    return 0;
}