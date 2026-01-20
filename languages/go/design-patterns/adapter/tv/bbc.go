package tv

import "fmt"

type BbcTV struct {
	Vol     int
	Channel int
	IsOn    bool
}

func (st *BbcTV) TurnOn() {
	fmt.Println("BBC is now on")
	st.IsOn = true
}

func (st *BbcTV) TurnOff() {
	fmt.Println("BBC is now off")
	st.IsOn = false
}

func (st *BbcTV) VolumeUp() int {
	st.Vol++
	fmt.Println("Increasing BBC volume to", st.Vol)
	return st.Vol
}

func (st *BbcTV) VolumeDown() int {
	st.Vol--
	fmt.Println("Decreasing BBC volume to", st.Vol)
	return st.Vol
}

func (st *BbcTV) ChannelUp() int {
	st.Channel++
	fmt.Println("Decreasing BBC channel to", st.Channel)
	return st.Channel
}

func (st *BbcTV) ChannelDown() int {
	st.Channel--
	fmt.Println("Decreasing BBC channel to", st.Channel)
	return st.Channel
}

func (st *BbcTV) GoToChannel(ch int) {
	st.Channel = ch
	fmt.Println("Setting BBC channel to", st.Channel)
}
