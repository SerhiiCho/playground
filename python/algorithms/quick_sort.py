items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]

def quicksort(dataset, first, last):
    if first < last:
        # calculate the split point
        pivot_idx = partition(dataset, first, last)

        quicksort(dataset, first, pivot_idx - 1)
        quicksort(dataset, pivot_idx + 1, last)

def partition(data_values, first, last):
    # choose the first values as a pivot value
    pivot_value = data_values[first]

    # establish the upper and the lower indexes
    lower = first + 1
    upper = last

    # start searching for the crossing point
    done = False

    while not done:
        # advance the lower index
        while lower <= upper and data_values[lower] <= pivot_value:
            lower += 1

        # advance the upper index
        while data_values[upper] >= pivot_value and upper >= lower:
            upper -= 1

        # if the two indexes cross, we have found the split point
        if upper < lower:
            done = True
        else:
            temp = data_values[lower]
            data_values[lower] = data_values[upper]
            data_values[upper] = temp

    # when the split point is found, swap the pivot value
    temp = data_values[first]

    data_values[first] = data_values[upper]
    data_values[upper] = temp

    return upper

# test the quick sort
print(items)
quicksort(items, 0, len(items) - 1)
print(items)


