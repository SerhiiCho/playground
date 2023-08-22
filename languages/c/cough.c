#include <stdio.h>

void cough(int times)
{
    for (int i = 0; i < times; i++) {
        printf("Cough like a god\n");
    }
}

int main(void)
{
    cough(100000);
    return 0;
}