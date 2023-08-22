# Time complexity is O(n)

items = [
    "apple",
    "pear",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "pear",
    "banana",
    "orange",
    "apple",
    "kiwi",
    "kiwi",
    "kiwi",
]

counter = dict()

for item in items:
    if (item in counter.keys()):
        counter[item] += 1
    else:
        counter[item] = 1

print(counter)
