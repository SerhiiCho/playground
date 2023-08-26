package app

import "fmt"

type SohneeTV struct {
	Vol     int
	Channel int
	IsOn    bool
}

func (st *SohneeTV) TurnOn() {
	fmt.Println("SohneeTV is now on")
	st.IsOn = true
}

func (st *SohneeTV) TurnOff() {
	fmt.Println("SohneeTV is now off")
	st.IsOn = false
}

func (st *SohneeTV) VolumeUp() int {
	st.Vol++
	fmt.Println("Increasing SohneeTV volume to", st.Vol)
	return st.Vol
}

func (st *SohneeTV) VolumeDown() int {
	st.Vol--
	fmt.Println("Decreasing SohneeTV volume to", st.Vol)
	return st.Vol
}

func (st *SohneeTV) ChannelUp() int {
	st.Channel++
	fmt.Println("Decreasing SohneeTV channel to", st.Channel)
	return st.Channel
}

func (st *SohneeTV) ChannelDown() int {
	st.Channel--
	fmt.Println("Decreasing SohneeTV channel to", st.Channel)
	return st.Channel
}

func (st *SohneeTV) GoToChannel(ch int) {
	st.Channel = ch
	fmt.Println("Setting SohneeTV channel to", st.Channel)
}
