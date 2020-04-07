package handlers

type sortByCases Response

func (s sortByCases) Len() int {
	return len(s.Countries)
}

func (s sortByCases) Swap(i, j int) {
	s.Countries[i], s.Countries[j] = s.Countries[j], s.Countries[i]
}

func (s sortByCases) Less(i, j int) bool {
	return s.Countries[i].TotalConfirmed > s.Countries[j].TotalConfirmed
}
