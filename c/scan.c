#include <stdlib.h>
#include <stdio.h>

int main()
{
    char name[20];
    int age;

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter you age: ");
    scanf("%d", &age);

    printf("Your name is %s and age is %d \n", name, age);

    return 0;
}