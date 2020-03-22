#include <stdio.h>
#include <time.h>
#include <unistd.h>

char *getResult()
{
    static char wordd[7];

    return wordd;
}

int main()
{
   time_t t = time(NULL);
   struct tm tm = *localtime(&t);

    printf("The result is: %c", getResult());
    return 0;
}