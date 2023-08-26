package main

import (
	. "adapter/app"
	. "adapter/tv"
	"fmt"
)

func main() {
	// Create instances of the two TV types with some default values
	tv1 := &CnnTV{
		CurrentChan:   13,
		CurrentVolume: 35,
		TvOn:          true,
	}
	tv2 := &BbcTV{
		Vol:     20,
		Channel: 9,
		IsOn:    true,
	}

	// Because the SohneeTV implements the "television" interface, we don't need an adapter
	tv2.TurnOn()
	tv2.VolumeUp()
	tv2.VolumeDown()
	tv2.ChannelUp()
	tv2.ChannelDown()
	tv2.GoToChannel(68)
	tv2.TurnOff()

	fmt.Println("--------------------")

	// We need to create a SammysangTV adapter for the SammysangTV class, however
	// because it has an interface that's different from the one we want to use
	ssAdapt := &CnnAdapter{
		Sstv: tv1,
	}
	ssAdapt.TurnOn()
	ssAdapt.VolumeUp()
	ssAdapt.VolumeDown()
	ssAdapt.ChannelUp()
	ssAdapt.ChannelDown()
	ssAdapt.GoToChannel(68)
	ssAdapt.TurnOff()
}
