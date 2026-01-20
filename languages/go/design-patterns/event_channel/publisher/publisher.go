package publisher

import "eventchannel/channel"

// Publisher is responsable for handling the publishing process
type Publisher struct {
	Topic   string
	Channel *channel.EventChannel
}

// Publish method publishes the given data to event channel
func (pub *Publisher) Publish(data string) {
	pub.Channel.Publish(pub.Topic, data)
}
