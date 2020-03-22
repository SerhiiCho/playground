package main

func main() {
	newsChannel := &EventChannel{}

	// Create new publisher and give it an event channel
	highgarderGroup := Publisher{
		Topic:   "highgarden-news",
		Channel: newsChannel,
	}

	serhii := Subscriber{"Serhii"}

	newsChannel.Subscribe("highgarden-news", serhii)

	// Now if we highgarden publish something, subscriber
	// Serhii gets notified about this event.
	highgarderGroup.Publish("New highgarder post")
}
