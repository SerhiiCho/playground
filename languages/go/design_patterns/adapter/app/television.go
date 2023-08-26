package app

type television interface {
	VolumeUp() int
	VolumeDown() int
	ChannelUp() int
	ChannelDown() int
	TurnOn()
	TurnOff()
	GoToChannel(ch int)
}
