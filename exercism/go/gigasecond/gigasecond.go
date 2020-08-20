package gigasecond

import "time"

// AddGigasecond adds 1 gigasecond to a given time
func AddGigasecond(t time.Time) time.Time {
	return t.Add(time.Second * 1000000000)
}
