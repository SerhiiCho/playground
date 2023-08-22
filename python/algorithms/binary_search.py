# searching for an item in an ordered list
# this technique uses a binary search

items = [6, 8, 19, 20, 23, 41, 53, 56, 87]

def binary_search(item, item_list):
    # get the list size
    list_size = len(item_list)

    lower_idx = 0
    upper_idx = list_size - 1

    while lower_idx <= upper_idx:
        middle = (lower_idx + upper_idx) // 2

        if item_list[middle] == item:
            return middle

        if item > item_list[middle]:
            lower_idx = middle + 1
        else:
            upper_idx = middle - 1

        if lower_idx > upper_idx:
            return None

print(binary_search(23, items))
print(binary_search(87, items))
print(binary_search(250, items))
