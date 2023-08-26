package app

type SammysangAdapter struct {
	Sstv *SammysangTV
}

func (ss *SammysangAdapter) TurnOn() {
	ss.Sstv.setOnState(true)
}

func (ss *SammysangAdapter) TurnOff() {
	ss.Sstv.setOnState(false)
}

func (ss *SammysangAdapter) VolumeUp() int {
	vol := ss.Sstv.getVolume() + 1
	ss.Sstv.setVolume(vol)
	return vol
}

func (ss *SammysangAdapter) VolumeDown() int {
	vol := ss.Sstv.getVolume() - 1
	ss.Sstv.setVolume(vol)
	return vol
}

func (ss *SammysangAdapter) ChannelUp() int {
	ch := ss.Sstv.getChannel() + 1
	ss.Sstv.setChannel(ch)
	return ch
}

func (ss *SammysangAdapter) ChannelDown() int {
	ch := ss.Sstv.getChannel() - 1
	ss.Sstv.setChannel(ch)
	return ch
}

func (ss *SammysangAdapter) GoToChannel(ch int) {
	ss.Sstv.setChannel(ch)
}
