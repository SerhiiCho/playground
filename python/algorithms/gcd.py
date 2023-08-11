# Implementation with recursion
def gcd(a, b):
    r = a % b if a > b else b % a

    if r == 0:
        return b

    a = b
    b = r

    return gcd(a, b)

# Implementation with the while loop
def gcd2(a, b):
    while (b != 0):
        temp = a
        a = b
        b = temp % b

    return a

print(gcd(60, 96)) # should be 12
print(gcd(20, 8)) # should be 4

