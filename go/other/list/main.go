package main

import (
	"container/list"
	"fmt"
)

func main() {
	names := list.New()

	names.PushBack("Serhii")
	names.PushBack("James")
	names.PushBack("Stan")
	names.PushFront("Anna")
	names.PushBack("Alex")

	// We will remove the last element
	names.Remove(names.Back())

	fmt.Printf("The length of the list is %d\n", names.Len())

	for v := names.Front(); v != nil; v = v.Next() {
		fmt.Println(v.Value)
	}
}
