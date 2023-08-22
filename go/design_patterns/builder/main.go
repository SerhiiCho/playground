package main

import (
	"fmt"
	"log"
)

func main() {
	bldr := newNotificationBuilder()

	bldr.SetTitle("New Notification")
	bldr.SetIcon("icon.png")
	bldr.SetImage("image.jpg")
	bldr.SetPriority(10)
	bldr.SetMessage("This is a basic notification with some text")
	bldr.SetType("alert")

	nofif, err := bldr.Build()

	if err != nil {
		log.Fatalln("Error building notification:", err)
	}

	fmt.Println(nofif)
}
