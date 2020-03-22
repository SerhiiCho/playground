package main

// AppMessenger realization
type AppMessenger struct {
	Messenger Messenger
}

// ToEmail sets messenger to email
func (m *AppMessenger) ToEmail() *AppMessenger {
	m.Messenger = &EmailMessenger{}
	return m
}

// ToSms sets messenger to sms
func (m *AppMessenger) ToSms() *AppMessenger {
	m.Messenger = &SmsMessenger{}
	return m
}

// Send sends message
func (m *AppMessenger) Send() bool {
	return m.Messenger.Send()
}
