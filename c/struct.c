#include <stdlib.h>
#include <stdio.h>
#include <string.h>

struct User
{
    char name[20];
    int age;
};

void structExample()
{
    struct User firstUser;
    firstUser.age = 29;
    strcpy(firstUser.name, "Mikel");

    printf("structExample: %s\n", firstUser.name);
}

void nestedArrayExample()
{
    int stuff[2][3] = {
        {1, 2, 3},
        {5, 4, 2}
    };

    printf("nestedArrayExample: %d\n", stuff[0][0]);
}

int main()
{
    structExample();
    nestedArrayExample();
    return 0;
}