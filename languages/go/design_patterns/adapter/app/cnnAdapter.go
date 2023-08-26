package app

import . "adapter/tv"

type CnnAdapter struct {
	// reference to original object
	Cnntv *CnnTV
}

func (cnn *CnnAdapter) TurnOn() {
	cnn.Cnntv.SetOnState(true)
}

func (cnn *CnnAdapter) TurnOff() {
	cnn.Cnntv.SetOnState(false)
}

func (cnn *CnnAdapter) VolumeUp() int {
	vol := cnn.Cnntv.GetVolume() + 1
	cnn.Cnntv.SetVolume(vol)
	return vol
}

func (cnn *CnnAdapter) VolumeDown() int {
	vol := cnn.Cnntv.GetVolume() - 1
	cnn.Cnntv.SetVolume(vol)
	return vol
}

func (cnn *CnnAdapter) ChannelUp() int {
	ch := cnn.Cnntv.GetChannel() + 1
	cnn.Cnntv.SetChannel(ch)
	return ch
}

func (cnn *CnnAdapter) ChannelDown() int {
	ch := cnn.Cnntv.GetChannel() - 1
	cnn.Cnntv.SetChannel(ch)
	return ch
}

func (cnn *CnnAdapter) GoToChannel(ch int) {
	cnn.Cnntv.SetChannel(ch)
}
