package tv

import "fmt"

type CnnTV struct {
	CurrentChan   int
	CurrentVolume int
	TvOn          bool
}

func (cnn *CnnTV) GetVolume() int {
	fmt.Println("ICTV volume is", cnn.CurrentVolume)
	return cnn.CurrentVolume
}

func (cnn *CnnTV) SetVolume(vol int) {
	fmt.Println("Setting ICTV volume to", vol)
	cnn.CurrentVolume = vol
}

func (cnn *CnnTV) GetChannel() int {
	fmt.Println("ICTV channel is", cnn.CurrentChan)
	return cnn.CurrentChan
}

func (cnn *CnnTV) SetChannel(ch int) {
	fmt.Println("Setting ICTV channel to", ch)
	cnn.CurrentChan = ch
}

func (cnn *CnnTV) SetOnState(tvOn bool) {
	if tvOn == true {
		fmt.Println("ICTV is on")
	} else {
		fmt.Println("ICTV is off")
	}
	cnn.TvOn = tvOn
}
