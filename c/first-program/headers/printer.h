#define MY_NAME "Serhii"

void printHelloTimes(int times)
{
    for (int i = 0; i <= times; i++) {
        printf("Hello, World %d!\n", i);
        i++;
    }
}

int count(int arr[], int length)
{
    int sum = 0;

    for (int i = 0; i < (length - 1); i++) {
        sum += arr[i];
    }

    return sum;
}
