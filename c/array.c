#include <stdlib.h>
#include <stdio.h>

int max(int num1, int num2)
{
    if (num1 > num2) {
        return num1;
    }

    return num2;
}

int main()
{
    int userIds[] = {11, 52, 3, 10, 40, 23, 234, 234, 98, 2};

    for (int i = 0; i < sizeof(userIds) / sizeof(userIds[0]); i++) {
        printf("%d\n", userIds[i]);
    }

    printf("\nThe max number is %d \n", max(10, 20));

    return 0;
}
