package tv

import "fmt"

type IctvTV struct {
	CurrentChan   int
	CurrentVolume int
	TvOn          bool
}

func (tv *IctvTV) GetVolume() int {
	fmt.Println("ICTV volume is", tv.CurrentVolume)
	return tv.CurrentVolume
}

func (tv *IctvTV) SetVolume(vol int) {
	fmt.Println("Setting ICTV volume to", vol)
	tv.CurrentVolume = vol
}

func (tv *IctvTV) GetChannel() int {
	fmt.Println("ICTV channel is", tv.CurrentChan)
	return tv.CurrentChan
}

func (tv *IctvTV) SetChannel(ch int) {
	fmt.Println("Setting ICTV channel to", ch)
	tv.CurrentChan = ch
}

func (tv *IctvTV) SetOnState(tvOn bool) {
	if tvOn == true {
		fmt.Println("ICTV is on")
	} else {
		fmt.Println("ICTV is off")
	}
	tv.TvOn = tvOn
}
