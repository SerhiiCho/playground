package app

// This is the television interface we want to use with both TV types
type television interface {
	VolumeUp() int
	VolumeDown() int
	ChannelUp() int
	ChannelDown() int
	TurnOn()
	TurnOff()
	GoToChannel(ch int)
}
