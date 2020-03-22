#include <stdio.h>
#include <stdlib.h>

double makeCalculation(double num1, double num2, char operator)
{
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            return 0;
    }
}

int main(void)
{
    start:;

    char answer;
    double num1;
    double num2;
    char operator;

    printf("Введите первое число: ");
    scanf("%lf", &num1);

    printf("Введите оператор (например: +-/*): ");
    scanf(" %c", &operator);

    printf("Введите второе число: ");
    scanf("%lf", &num2);

    double result = makeCalculation(num1, num2, operator);

    (result == 0)
        ? printf("Введенный оператор был неверный.\n")
        : printf("Ответ %.2f %c %.2f = %.2f\n\n", num1, operator, num2, result);

    printf("Попробовать еще? (y/n) ");
    scanf(" %c", &answer);

    if (answer == 'y') {
        goto start;
    } else {
        printf("Досвидос!!\n");
    }

    return 0;
}