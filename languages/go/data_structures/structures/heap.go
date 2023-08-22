package structures

import "fmt"

type Heap struct {
	items     []int
	currIndex int
}

func (h Heap) left() int {
	return h.items[2*h.currIndex+1]
}

func (h Heap) right() int {
	return h.items[2*h.currIndex+2]
}

func (h Heap) parent() int {
	return h.items[h.currIndex/2-1]
}

func HeapExample() {
	heap := Heap{
		items:     []int{21, 17, 15, 14, 9, 12, 13, 8, 5, 1},
		currIndex: 2,
	}

	fmt.Println(heap.left(), heap.right(), heap.parent())
}
