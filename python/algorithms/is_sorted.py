# determine if a list is sorted

items1 = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
items2 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def is_sorted(item_list):
    for i in range(0, len(item_list) -1):
        curr_el = item_list[i]
        next_el = item_list[i + 1]

        if curr_el > next_el:
            return False

    return True

print(is_sorted(items1))
print(is_sorted(items2))
