package handlers

// ResponseItem from API endpoint
type ResponseItem struct {
	Country string `json:"country"`
	Cases   struct {
		New       string `json:"new"`
		Total     int    `json:"total"`
		Recovered int    `json:"recovered"`
	} `json:"cases"`
	Deaths struct {
		New   string `json:"new"`
		Total int    `json:"total"`
	} `json:"deaths"`
}

// Response from API endpoint
type Response struct {
	Get        string         `json:"get"`
	Parameters []interface{}  `json:"parameters"`
	Errors     []interface{}  `json:"errors"`
	Results    int            `json:"results"`
	Response   []ResponseItem `json:"response"`
}
