package app

import "fmt"

type SammysangTV struct {
	CurrentChan   int
	CurrentVolume int
	TvOn          bool
}

func (tv *SammysangTV) getVolume() int {
	fmt.Println("SammysangTV volume is", tv.CurrentVolume)
	return tv.CurrentVolume
}

func (tv *SammysangTV) setVolume(vol int) {
	fmt.Println("Setting SammysangTV volume to", vol)
	tv.CurrentVolume = vol
}

func (tv *SammysangTV) getChannel() int {
	fmt.Println("SammysangTV channel is", tv.CurrentChan)
	return tv.CurrentChan
}

func (tv *SammysangTV) setChannel(ch int) {
	fmt.Println("Setting SammysangTV channel to", ch)
	tv.CurrentChan = ch
}

func (tv *SammysangTV) setOnState(tvOn bool) {
	if tvOn == true {
		fmt.Println("SammysangTV is on")
	} else {
		fmt.Println("SammysangTV is off")
	}
	tv.TvOn = tvOn
}
