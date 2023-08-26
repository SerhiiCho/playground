package app

import . "adapter/tv"

type CnnAdapter struct {
	Sstv *CnnTV
}

func (cnn *CnnAdapter) TurnOn() {
	cnn.Sstv.SetOnState(true)
}

func (cnn *CnnAdapter) TurnOff() {
	cnn.Sstv.SetOnState(false)
}

func (cnn *CnnAdapter) VolumeUp() int {
	vol := cnn.Sstv.GetVolume() + 1
	cnn.Sstv.SetVolume(vol)
	return vol
}

func (cnn *CnnAdapter) VolumeDown() int {
	vol := cnn.Sstv.GetVolume() - 1
	cnn.Sstv.SetVolume(vol)
	return vol
}

func (cnn *CnnAdapter) ChannelUp() int {
	ch := cnn.Sstv.GetChannel() + 1
	cnn.Sstv.SetChannel(ch)
	return ch
}

func (cnn *CnnAdapter) ChannelDown() int {
	ch := cnn.Sstv.GetChannel() - 1
	cnn.Sstv.SetChannel(ch)
	return ch
}

func (cnn *CnnAdapter) GoToChannel(ch int) {
	cnn.Sstv.SetChannel(ch)
}
