#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

int strContainsDigit(char pass[])
{
    for (int i = 0; i < strlen(pass); i++) {
        if (isdigit(pass[i])) {
            return 1;
        }
    }

    return 0;
}

int strContainsUpper(char pass[])
{
    for (int i = 0; i < strlen(pass); i++) {
        if (isupper(pass[i])) {
            return 1;
        }
    }

    return 0;
}

void checkPassword(char pass[])
{
    if (!strContainsUpper(pass)) {
        printf("Your password must have at least 1 uppercase character.\n");
    }

    if (!strContainsDigit(pass)) {
        printf("Your password must have at least digit.\n");
    }

    if (strContainsUpper(pass) && strContainsDigit(pass)) {
        printf("Your password is great!!\n");
    }
}

int main()
{
    char pass[20];

    printf("Type password: ");
    scanf("%s", pass);

    checkPassword(pass);

    return 0;
}