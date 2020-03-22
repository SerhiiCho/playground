#include <stdlib.h>
#include <stdio.h>

struct User
{
    char name[20];
    int age;
};

int main()
{
    struct User firstUser;
    firstUser.age = 29;
    strcpy(firstUser.name, "Mikel");

    int stuff[2][3] = {
        {1, 2, 3},
        {5, 4, 2}
    };

    printf("%s", firstUser.name);

    return 0;
}