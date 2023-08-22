package main

import (
	. "eventchannel/channel"
	. "eventchannel/publisher"
	. "eventchannel/subscriber"
)

func main() {
	newsChannel := &EventChannel{}

	// Create new publisher and give it an event channel
	highgarderGroup := Publisher{
		Topic:   "bbc-news",
		Channel: newsChannel,
	}

	serhii := Subscriber{
		Name: "Serhii",
	}

	newsChannel.Subscribe("bbc-news", serhii)

	// Now if we BBC publish something, subscriber
	// Serhii gets notified about this event.
	highgarderGroup.Publish("New BBC post")
}
