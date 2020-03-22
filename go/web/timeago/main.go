package main

import (
	"fmt"

	"github.com/SerhiiCho/timeago"
)

// Some date. It might come from anywhere, but the
// format must be year-month-day hour-minutes-seconds
const serhiiBirthday = "2020-02-27 10:00:00"

func init() {
	timeago.Set("location", "Europe/Kiev")
	timeago.Set("language", "en")
}

func main() {
	res := timeago.Take(serhiiBirthday)

	fmt.Println(res)
}
