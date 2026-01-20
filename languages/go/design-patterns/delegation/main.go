package main

import "delegation/messenger"

func main() {
	// creating empty messenger. messenger itself is not sending messages
	// it uses other structs to do this job
	messenger := messenger.AppMessenger{Messenger: nil}

	// delegetion to email struct
	messenger.ToEmail().Send()

	// delegetion to sms struct
	messenger.ToSms().Send()
}
