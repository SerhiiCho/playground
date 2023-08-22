# use a hash table to filter out duplicate items O(n)

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

# create a hash table
filter = dict()

# loop over each item and add to the hashtable
for item in items:
    filter[item] = 0

# create a set from the resulting keys in the hashtable
result = set(filter.keys())

print(result)
