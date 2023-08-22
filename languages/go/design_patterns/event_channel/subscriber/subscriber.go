package subscriber

import "fmt"

// Subscriber can be notified after publish
type Subscriber struct {
	Name string
}

// Notify method notifies the subscriber about data.
// data can be not only string, it can be any type,
// in this example I use string for simplicity.
func (sub *Subscriber) Notify(data string) {
	fmt.Println(sub.Name + " notified with data: " + data)
}
