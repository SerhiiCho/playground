package channel

import (
	. "eventchannel/subscriber"
	"fmt"
)

// EventChannel is responsable for subscribing topic to a subscriber
// and notifying the subscriber when topic has been published.
type EventChannel struct {
	topics map[string][]Subscriber
}

// Subscribe connects topic with subscriber
func (ch *EventChannel) Subscribe(topic string, sub Subscriber) {
	ch.topics = make(map[string][]Subscriber)
	ch.topics[topic] = []Subscriber{sub}
	fmt.Println(sub.Name + " subscribed on topic: " + topic)
}

// Publish publishes the data
func (ch *EventChannel) Publish(topic string, data string) {
	if len(ch.topics[topic]) == 0 {
		return
	}

	for _, sub := range ch.topics[topic] {
		sub.Notify(data)
	}
}
