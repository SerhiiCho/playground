package main

import (
	"fmt"
	"sort"
)

func main() {
	items := []int{23, 2, 52, 14, 1, 5, 9, 8, 11, 7, 10, 4, 3}
	sort.Sort(sort.Reverse(sort.IntSlice(items)))

	first, second := getChildren(items, 3)

	fmt.Println(first, second)
	fmt.Println(items)
}

func getChildren(items []int, item int) (int, int) {
	return items[item+item+1], items[item+item+2]
}
