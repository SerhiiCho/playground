package main

import "fmt"

// EmailMessenger is one of the realizations of the Messenger interface
type EmailMessenger struct{}

// Send sends message via email
func (m *EmailMessenger) Send() bool {
	fmt.Println("sending via email")
	return true
}
