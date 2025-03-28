#include <stdio.h>

typedef struct Human {
  int age;
  char *name;
  int is_alive;
} human_t;

int main() {
  human_t human = {
      .age = 20,
      .name = "John",
      .is_alive = 1,
  };

  printf("Name: %s\n", human.name);
  return 0;
}
