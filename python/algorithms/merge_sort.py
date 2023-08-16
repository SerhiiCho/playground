items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def mergesort(dataset):
    if len(dataset) > 1:
        mid = len(dataset) // 2
        left = dataset[:mid]
        right = dataset[mid:]

        mergesort(left)
        mergesort(right)

        i_left = 0
        i_right = 0
        i_merge = 0

        # sort numbers
        while i_left < len(left) and i_right < len(right):
            left_num = left[i_left]
            right_num = right[i_right]

            if left_num < right_num:
                dataset[i_merge] = left_num
                i_left += 1
            else:
                dataset[i_merge] = right_num
                i_right += 1

            i_merge += 1

        # if left array still has values, add them to dataset
        while i_left < len(left):
            dataset[i_merge] = left[i_left]
            i_left += 1
            i_merge += 1

        # if right array still has values, add them to dataset
        while i_right < len(right):
            dataset[i_merge] = right[i_right]
            i_right += 1
            i_merge += 1

print(items)
mergesort(items)
print(items)
