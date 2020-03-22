#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>

int main()
{
    int tuna = '$';

    if (isalpha(tuna)) { // is letter
        printf("%c is a letter\n", tuna);
    }

    if (isdigit(tuna)) {
        printf("%c is a number\n", tuna);
    }

    if (!isdigit(tuna) && !isalpha(tuna)) {
        printf("%c is a WTF is that!?\n", tuna);
    }

    return 0;
}