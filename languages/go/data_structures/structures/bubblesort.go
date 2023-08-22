package structures

import "fmt"

var Name = "Anna"

func Bubblesort() {
	nums := []int{24, 7, 6, 2342, 4, 5, 235, 3, 52324, 2, 0}

	res := sort(nums, 0)

	fmt.Println(res)
}

func sort(nums []int, exclude int) []int {
	length := len(nums)

	if exclude >= length {
		return nums
	}

	for i := 0; i < len(nums); i++ {
		if i+1 >= length {
			continue
		}

		next := nums[i+1]
		curr := nums[i]

		if curr > next {
			nums[i+1] = curr
			nums[i] = next
		}
	}

	return sort(nums, exclude+1)
}
