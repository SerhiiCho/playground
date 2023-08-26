package app

import . "adapter/tv"

type IctvAdapter struct {
	Sstv *IctvTV
}

func (ss *IctvAdapter) TurnOn() {
	ss.Sstv.SetOnState(true)
}

func (ss *IctvAdapter) TurnOff() {
	ss.Sstv.SetOnState(false)
}

func (ss *IctvAdapter) VolumeUp() int {
	vol := ss.Sstv.GetVolume() + 1
	ss.Sstv.SetVolume(vol)
	return vol
}

func (ss *IctvAdapter) VolumeDown() int {
	vol := ss.Sstv.GetVolume() - 1
	ss.Sstv.SetVolume(vol)
	return vol
}

func (ss *IctvAdapter) ChannelUp() int {
	ch := ss.Sstv.GetChannel() + 1
	ss.Sstv.SetChannel(ch)
	return ch
}

func (ss *IctvAdapter) ChannelDown() int {
	ch := ss.Sstv.GetChannel() - 1
	ss.Sstv.SetChannel(ch)
	return ch
}

func (ss *IctvAdapter) GoToChannel(ch int) {
	ss.Sstv.SetChannel(ch)
}
