package handlers

type sortByCases Response

func (s sortByCases) Len() int {
	return len(s.Response)
}

func (s sortByCases) Swap(i, j int) {
	s.Response[i], s.Response[j] = s.Response[j], s.Response[i]
}

func (s sortByCases) Less(i, j int) bool {
	return s.Response[i].Cases.Total > s.Response[j].Cases.Total
}
