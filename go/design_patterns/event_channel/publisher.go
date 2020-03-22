package main

// Publisher is responsable for handling the publishing process
type Publisher struct {
	Topic   string
	Channel *EventChannel
}

// Publish method publishes the given data to event channel
func (pub *Publisher) Publish(data string) {
	pub.Channel.Publish(pub.Topic, data)
}
