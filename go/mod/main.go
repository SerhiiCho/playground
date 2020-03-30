package main

import (
    "fmt"
    "github.com/SerhiiCho/timeago"
)

func main() {
    res := timeago.Take("2020-03-30 9:10:00")
    fmt.Println(res)
}
