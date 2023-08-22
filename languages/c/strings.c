#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main()
{
    char myName[] = "Serhii";
    char favColor[] = "red";
    char emptyString[13];

    int len = strlen(myName);

    strcat(myName, " ");
    strcat(myName, favColor);
    strcpy(emptyString, myName);

    printf("String length of myName is %d\n", len);
    printf("Concat 2 strings %s\n", toupper(myName));
    printf("Value of emptyString now is  %s\n", emptyString);

    return 0;
}