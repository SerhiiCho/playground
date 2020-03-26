package handlers

// ResponseCases child of ResponseItem
type ResponseCases struct {
	New       string `json:"new"`
	Total     int    `json:"total"`
	Recovered int    `json:"recovered"`
}

// ResponseDeaths child of ResponseItem
type ResponseDeaths struct {
	New   string `json:"new"`
	Total int    `json:"total"`
}

// ResponseItem child of Response
type ResponseItem struct {
	Country string         `json:"country"`
	Cases   ResponseCases  `json:"cases"`
	Deaths  ResponseDeaths `json:"deaths"`
}

// Response representation of json from API endpoint
type Response struct {
	Get        string         `json:"get"`
	Parameters []interface{}  `json:"parameters"`
	Errors     []interface{}  `json:"errors"`
	Results    int            `json:"results"`
	Response   []ResponseItem `json:"response"`
}
