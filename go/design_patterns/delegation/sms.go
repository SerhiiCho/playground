package main

import "fmt"

// SmsMessenger is one of the realizations of the Messenger interface
type SmsMessenger struct{}

// Send sends message via sms
func (m *SmsMessenger) Send() bool {
	fmt.Println("sending via sms")
	return true
}
