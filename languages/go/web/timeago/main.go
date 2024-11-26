package main

import (
	"fmt"
	"time"

	ago "github.com/SerhiiCho/timeago/v3"
)

func init() {
	ago.Configure(ago.Config{
		OnlineThreshold: 30,
	})
}

func main() {
	_25secondsAgo := time.Now().Add(-25 * time.Second)
	_35secondsAgo := time.Now().Add(-35 * time.Second)

	out25, _ := ago.Parse(_25secondsAgo, ago.OptOnline)
	out35, _ := ago.Parse(_35secondsAgo, ago.OptOnline)

	fmt.Println(out25) // Output: "Online"
	fmt.Println(out35) // Output: "35 seconds ago"
}
